import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Citation {
  recordName: string;
  community: string;
  location: string;
  source: string;
}

// Fallback exact matcher when GEMINI_API_KEY is not set in local container
function localDisanMatcher(question: string, disanData: any[]): { answer: string; citations: Citation[]; foundInDossier: boolean } {
  if (!disanData || disanData.length === 0) {
    return {
      answer: 'Hiện chưa có tư liệu trong hồ sơ số disan.json để trả lời nội dung này.',
      citations: [],
      foundInDossier: false,
    };
  }

  const q = question.toLowerCase().trim();
  
  // Specific community filters to prevent cross-community attribution
  const communities = [
    { key: 'vạn thủy tú', prov: 'bình thuận', nameMatch: 'thủy tú' },
    { key: 'hòn khói', prov: 'khánh hòa', nameMatch: 'hòn khói' },
    { key: 'đà nẵng', prov: 'đà nẵng', nameMatch: 'thọ quang' },
    { key: 'cổ mân', prov: 'đà nẵng', nameMatch: 'cổ mân' },
    { key: 'đông tác', prov: 'phú yên', nameMatch: 'đông tác' },
    { key: 'phú yên', prov: 'phú yên', nameMatch: 'đông tác' },
    { key: 'tân thạnh', prov: 'quảng ngãi', nameMatch: 'tân thạnh' },
    { key: 'quảng ngãi', prov: 'quảng ngãi', nameMatch: 'tân thạnh' },
  ];

  // Score each record based on keyword overlap
  const scored = disanData.map(item => {
    let score = 0;
    const name = (item.ten_theo_danh_muc || '').toLowerCase();
    const localName = (item.ten_goi_ban_dia || '').toLowerCase();
    const practice = (item.thuc_hanh_di_san || '').toLowerCase();
    const loc = (item.dia_danh_hien_nay || '').toLowerCase();
    const oldLoc = (item.dia_danh_tai_thoi_diem_tu_lieu || '').toLowerCase();
    const desc = (item.mo_ta || '').toLowerCase();
    const context = (item.boi_canh_dien_xuong || '').toLowerCase();
    const informant = (item.nguoi_cung_cap || '').toLowerCase();

    // Community Isolation Check: if user specifically asked about community A, do not match community B
    for (const c of communities) {
      if (q.includes(c.key)) {
        if (name.includes(c.nameMatch) || loc.includes(c.prov)) {
          score += 25;
        } else {
          // Penalize cross-attributing to another specific community
          score -= 30;
        }
      }
    }

    if (q.includes('vạn thủy tú') || q.includes('thủy tú') || q.includes('phan thiết')) {
      if (name.includes('thủy tú') || loc.includes('bình thuận')) score += 15;
    }
    if (q.includes('hòn khói') || q.includes('ninh hòa')) {
      if (name.includes('hòn khói') || loc.includes('khánh hòa')) score += 15;
    }
    if (q.includes('thọ quang') || q.includes('cổ mân')) {
      if (name.includes('thọ quang') || loc.includes('đà nẵng')) score += 15;
    }
    if (q.includes('đông tác') || q.includes('tuy hòa') || q.includes('ông lụy') || q.includes('tang tế') || q.includes('trưởng nam')) {
      if (name.includes('đông tác') || practice.includes('tang tế')) score += 15;
    }
    if (q.includes('tân thạnh') || q.includes('bình sơn') || q.includes('hò mái ba')) {
      if (name.includes('tân thạnh') || practice.includes('mái ba')) score += 15;
    }
    if (q.includes('sắc phong') || q.includes('gia long') || q.includes('ngọc lân') || q.includes('triều nguyễn')) {
      if (name.includes('sắc phong') || desc.includes('gia long')) score += 15;
    }
    if (q.includes('trang phục') || q.includes('đạo cụ') || q.includes('ba tổng') || q.includes('phục trang')) {
      if (name.includes('trang phục') || desc.includes('ba tổng')) score += 15;
    }
    if (q.includes('giới trẻ') || q.includes('sinh viên') || q.includes('truyền dạy') || q.includes('học sinh')) {
      if (name.includes('truyền dạy') || desc.includes('thanh thiếu niên')) score += 15;
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Strict threshold: Must have confident match, otherwise state clearly that data is not found
  if (scored[0] && scored[0].score >= 10) {
    const top = scored[0].item;
    const citations: Citation[] = [
      {
        recordName: top.ten_theo_danh_muc || top.ten_goi_ban_dia || 'Bản ghi di sản',
        community: top.nguoi_cung_cap || 'Cộng đồng vạn chài',
        location: top.dia_danh_hien_nay || top.dia_danh_tai_thoi_diem_tu_lieu || 'Duyên hải Nam Trung Bộ',
        source: top.nguon_tu_lieu || 'Hồ sơ điền dã di sản',
      },
    ];

    let answer = `Căn cứ theo bản ghi "${top.ten_theo_danh_muc}" (thuộc cộng đồng ${top.nguoi_cung_cap}, địa danh: ${top.dia_danh_hien_nay}):\n\n`;
    answer += `• Về thực hành di sản: ${top.thuc_hanh_di_san}\n`;
    answer += `• Khảo tả chi tiết: ${top.mo_ta}\n`;
    if (top.boi_canh_dien_xuong) {
      answer += `• Bối cảnh diễn xướng: ${top.boi_canh_dien_xuong}\n`;
    }
    answer += `\n(Lưu ý: Thông tin này thuộc về cộng đồng ${top.nguoi_cung_cap} tại ${top.dia_danh_hien_nay}, không gán ghép sang các vạn chài hoặc địa phương khác).`;

    return {
      answer,
      citations,
      foundInDossier: true,
    };
  }

  // Not found: Strict statement as required
  return {
    answer: `Hiện chưa có tư liệu trong hồ sơ di sản disan.json về nội dung này. Hệ thống tuân thủ nguyên tắc tuyệt đối không tự suy đoán, không bịa thông tin và không gán ghép phong tục giữa các cộng đồng khác nhau.`,
    citations: [],
    foundInDossier: false,
  };
}

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Route: Ask Gemini based on disan.json (strictly server-side, no client API keys)
  app.post('/api/gemini/faq', async (req, res) => {
    try {
      const { question, customDisan } = req.body;
      if (!question || typeof question !== 'string' || !question.trim()) {
        return res.status(400).json({ error: 'Vui lòng cung cấp nội dung câu hỏi.' });
      }

      // Load disan.json data
      let disanData = [];
      if (customDisan && Array.isArray(customDisan) && customDisan.length > 0) {
        disanData = customDisan;
      } else {
        const disanPath = path.resolve(__dirname, 'src', 'data', 'disan.json');
        if (fs.existsSync(disanPath)) {
          const fileContent = fs.readFileSync(disanPath, 'utf-8');
          try {
            disanData = JSON.parse(fileContent);
          } catch (e) {
            console.error('Failed to parse disan.json', e);
          }
        }
      }

      const apiKey = process.env.GEMINI_API_KEY;

      // If GEMINI_API_KEY is available, invoke Gemini 3.8 Flash
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim().length > 5) {
        try {
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              },
            },
          });

          const systemInstruction = `Bạn là chuyên gia tra cứu và thẩm định hồ sơ khoa học số "Lễ hội Cầu ngư và tín ngưỡng ngư dân Nam Trung Bộ".
Nhiệm vụ cốt lõi: Đọc câu hỏi của người dùng và trả lời HOÀN TOÀN DỰA TRÊN dữ liệu trong tệp disan.json được cung cấp.

CÁC NGUYÊN TẮC BẮT BUỘC (TUYỆT ĐỐI TUÂN THỦ):
1. TUYỆT ĐỐI KHÔNG TỰ SUY ĐOÁN HOẶC BỊA THÔNG TIN: Chỉ sử dụng các chi tiết, thông tin có nguyên văn hoặc ý nghĩa tương đương trong danh sách bản ghi disan.json được gửi kèm. Tuyệt đối KHÔNG suy diễn hoặc đưa thông tin ngoài dữ liệu.
2. NẾU KHÔNG TÌM THẤY TRONG DỮ LIỆU: Phải trả lời rõ ràng là: "Hiện chưa có tư liệu trong hồ sơ di sản disan.json về nội dung này." Đồng thời đặt foundInDossier là false, citations là mảng rỗng []. Tuyệt đối không cố gắng bịa câu trả lời.
3. TUYỆT ĐỐI KHÔNG GÁN THÔNG TIN CỦA CỘNG ĐỒNG HOẶC VÙNG NÀY SANG CỘNG ĐỒNG HOẶC VÙNG KHÁC: Mỗi thực hành, làn điệu, bối cảnh chỉ thuộc về duy nhất cộng đồng và địa danh được ghi trong bản ghi đó. Ví dụ: tập tục của Vạn Thủy Tú (Bình Thuận) không được gán cho Vạn Đông Tác (Phú Yên) hay Lăng Thọ Quang (Đà Nẵng).
4. MỖI CÂU TRẢ LỜI ĐƯỢC PHẢI KÈM ĐỦ 4 THUỘC TÍNH TRÍCH DẪN từ bản ghi tương ứng:
   - recordName: Tên bản ghi (từ trường ten_theo_danh_muc hoặc ten_goi_ban_dia)
   - community: Tên cộng đồng / người cung cấp (từ trường nguoi_cung_cap)
   - location: Địa danh (từ trường dia_danh_hien_nay hoặc dia_danh_tai_thoi_diem_tu_lieu)
   - source: Trường nguồn tư liệu đã dùng (từ trường nguon_tu_lieu)
5. Ngôn ngữ: Toàn bộ bằng tiếng Việt chuẩn mực, trang trọng, bảng mã UTF-8.`;

          const userPrompt = `Dưới đây là toàn bộ nội dung tệp dữ liệu di sản (disan.json):
\`\`\`json
${JSON.stringify(disanData, null, 2)}
\`\`\`

CÂU HỎI CỦA NGƯỜI DÙNG:
"${question.trim()}"

Hãy đọc kỹ câu hỏi và các bản ghi trong disan.json. Tuân thủ tuyệt đối: không tự suy đoán, không bịa thông tin, nếu không có thì trả lời rõ là chưa có tư liệu, không gán thông tin giữa các cộng đồng, và kèm đầy đủ 4 trường trích dẫn (Tên bản ghi, Tên cộng đồng, Địa danh, Nguồn tư liệu đã dùng).`;

          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: userPrompt,
            config: {
              systemInstruction,
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  answer: {
                    type: Type.STRING,
                    description: 'Nội dung trả lời chi tiết và khúc chiết, hoàn toàn dựa trên disan.json. Nếu không có thông tin thì nêu rõ.',
                  },
                  citations: {
                    type: Type.ARRAY,
                    description: 'Danh sách các trích dẫn bản ghi từ disan.json đã được dùng để trả lời',
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        recordName: {
                          type: Type.STRING,
                          description: 'Tên bản ghi (từ ten_theo_danh_muc hoặc ten_goi_ban_dia)',
                        },
                        community: {
                          type: Type.STRING,
                          description: 'Tên cộng đồng / người cung cấp (từ trường nguoi_cung_cap)',
                        },
                        location: {
                          type: Type.STRING,
                          description: 'Địa danh (từ trường dia_danh_hien_nay hoặc dia_danh_tai_thoi_diem_tu_lieu)',
                        },
                        source: {
                          type: Type.STRING,
                          description: 'Trường nguồn tư liệu đã dùng (từ trường nguon_tu_lieu)',
                        },
                      },
                      required: ['recordName', 'community', 'location', 'source'],
                    },
                  },
                  foundInDossier: {
                    type: Type.BOOLEAN,
                    description: 'True nếu hồ sơ disan.json có thông tin trả lời, False nếu không tìm thấy',
                  },
                },
                required: ['answer', 'citations', 'foundInDossier'],
              },
            },
          });

          const responseText = response.text || '{}';
          const parsed = JSON.parse(responseText);
          return res.json(parsed);
        } catch (apiError: any) {
          console.warn('Gemini API call failed, falling back to local disan matcher:', apiError.message);
          const fallback = localDisanMatcher(question, disanData);
          return res.json(fallback);
        }
      }

      // If GEMINI_API_KEY is not yet injected, execute local disan matcher directly
      const fallback = localDisanMatcher(question, disanData);
      return res.json(fallback);
    } catch (err: any) {
      console.error('Error handling /api/gemini/faq request:', err);
      return res.status(500).json({
        error: 'Lỗi xử lý câu hỏi: ' + (err.message || String(err)),
      });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Express server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
