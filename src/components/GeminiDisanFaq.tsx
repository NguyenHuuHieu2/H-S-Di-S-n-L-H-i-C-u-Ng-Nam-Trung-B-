import React, { useState, useEffect } from 'react';
import { Sparkles, Send, BookOpen, MapPin, UserCheck, FileText, AlertCircle, Check, Copy, CornerDownRight, HelpCircle } from 'lucide-react';
import rawDisanData from '../data/disan.json';

interface Citation {
  recordName: string;
  community: string;
  location: string;
  source: string;
}

interface GeminiFaqResponse {
  answer: string;
  citations: Citation[];
  foundInDossier: boolean;
}

const SAMPLE_QUESTIONS = [
  'Lễ hội Cầu ngư Vạn Thủy Tú diễn ra vào những thời điểm nào và có bao nhiêu kỳ tế tự?',
  'Bộ cốt cá voi lớn nhất Đông Nam Á được lưu giữ tại địa danh nào và có kích thước ra sao?',
  'Quy thức tang tế khi Cá Ông lụy bờ tại Vạn Đông Tác Phú Yên quy định như thế nào?',
  'Nghệ thuật Hát Bả Trạo tại Hòn Khói Khánh Hòa có đặc trưng và nguồn tư liệu chép tay gì?',
  'Làn điệu Hò Mái Ba và Hát Nam Khách của đội chèo Tân Thạnh Quảng Ngãi có ý nghĩa gì?',
  'Lễ Nghinh Thủy Lục tại Lăng Ông Thọ Quang Đà Nẵng diễn ra trên không gian nào?',
  'Lễ hội chọi trâu Đồ Sơn có nằm trong hồ sơ di sản này không?' // Negative test: proves strict adherence to disan.json
];

interface GeminiDisanFaqProps {
  externalQuery?: string;
}

export const GeminiDisanFaq: React.FC<GeminiDisanFaqProps> = ({ externalQuery }) => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeminiFaqResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [askedQuestion, setAskedQuestion] = useState<string>('');

  const recordCount = Array.isArray(rawDisanData) ? rawDisanData.length : 0;

  useEffect(() => {
    if (externalQuery && externalQuery.trim()) {
      setQuestion(externalQuery);
      handleAsk(externalQuery);
    }
  }, [externalQuery]);

  const handleAsk = async (queryToAsk?: string) => {
    const q = (queryToAsk || question).trim();
    if (!q) return;

    setLoading(true);
    setError(null);
    setAskedQuestion(q);

    try {
      const response = await fetch('/api/gemini/faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: q,
          customDisan: rawDisanData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Lỗi máy chủ (${response.status})`);
      }

      const data: GeminiFaqResponse = await response.json();
      setResult(data);
      if (queryToAsk) {
        setQuestion(queryToAsk);
      }
    } catch (err: any) {
      console.error('Error querying Gemini FAQ:', err);
      setError(err.message || 'Không thể tra cứu câu hỏi với Gemini. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    let textToCopy = `CÂU HỎI: ${askedQuestion}\n\n`;
    textToCopy += `TRẢ LỜI (Dựa trên tệp disan.json):\n${result.answer}\n\n`;
    if (result.citations && result.citations.length > 0) {
      textToCopy += `TRÍCH DẪN NGUỒN TƯ LIỆU ĐÃ DÙNG:\n`;
      result.citations.forEach((c, idx) => {
        textToCopy += `\n[Bản ghi ${idx + 1}]\n`;
        textToCopy += `- Tên bản ghi: ${c.recordName}\n`;
        textToCopy += `- Tên cộng đồng: ${c.community}\n`;
        textToCopy += `- Địa danh: ${c.location}\n`;
        textToCopy += `- Nguồn tư liệu đã dùng: ${c.source}\n`;
      });
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="gemini-faq-console" className="bg-gradient-to-b from-amber-50/70 via-white to-stone-50 border-2 border-amber-900/20 rounded-sm p-5 sm:p-7 shadow-xs space-y-6 scroll-mt-20">
      {/* Header of AI Assistant */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-amber-900/10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-amber-900 text-amber-50 rounded-xs inline-flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-bold text-amber-900 tracking-wider uppercase">
              Trợ Lý Khảo Tả Di Sản AI · Gemini 3.8 Flash
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Tra Cứu & Trả Lời Hoàn Toàn Dựa Trên Tệp <code className="text-amber-900 font-mono text-sm bg-amber-100/70 px-1.5 py-0.5 rounded border border-amber-300">disan.json</code>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
            Hệ thống sử dụng mô hình trí tuệ nhân tạo Gemini đọc trực tiếp tệp hồ sơ <span className="font-mono text-xs font-semibold text-stone-800">disan.json</span> để giải đáp mọi thắc mắc của bạn. Mỗi câu trả lời được kiểm soát nghiêm ngặt, bắt buộc kèm đủ <strong>4 trường trích dẫn</strong>: Tên bản ghi, Tên cộng đồng, Địa danh và Nguồn tư liệu đã dùng.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-200 rounded-xs text-[11px] text-amber-900 self-start">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Hồ sơ đang nạp: <strong>{recordCount} bản ghi</strong></span>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
          <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
          <span>Gợi ý câu hỏi điền dã mẫu (bấm để tra cứu ngay):</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SAMPLE_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuestion(q);
                handleAsk(q);
              }}
              disabled={loading}
              className="text-left text-xs px-3 py-1.5 bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-950 rounded-xs transition-colors disabled:opacity-50"
            >
              <CornerDownRight className="w-3 h-3 inline-block mr-1 text-amber-700" />
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Query Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="space-y-2"
      >
        <div className="relative">
          <textarea
            rows={3}
            placeholder="Nhập câu hỏi bạn muốn tra cứu từ tệp disan.json (VD: 'Quy thức tang lễ Cá Ông lụy bờ diễn ra ra sao?', 'Bộ xương cá voi tại Phan Thiết có nguồn gốc từ đâu?')..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
            className="w-full text-xs sm:text-sm bg-white border border-stone-300 rounded-xs p-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 shadow-2xs resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-[11px] text-amber-950 font-medium italic">
            * Nguyên tắc: Tuyệt đối không tự suy đoán hoặc bịa thông tin. Không tìm thấy trong dữ liệu thì trả lời rõ là chưa có tư liệu. Tuyệt đối không gán thông tin của cộng đồng hoặc vùng này sang cộng đồng hoặc vùng khác.
          </span>

          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="min-h-[44px] px-6 py-2 bg-amber-900 hover:bg-amber-950 disabled:bg-stone-300 text-white font-semibold text-xs sm:text-sm rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Gemini đang đọc disan.json...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Hỏi Gemini tra cứu</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error state */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xs text-xs text-red-800 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">Không thể xử lý yêu cầu</strong>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Answer & Citations Card */}
      {result && (
        <div className="bg-white border-2 border-amber-900/30 rounded-xs p-5 sm:p-6 shadow-sm space-y-5 animate-fadeIn">
          {/* Question Banner */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-stone-200">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                Câu hỏi đã đối chiếu:
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                "{askedQuestion}"
              </h3>
            </div>

            <button
              onClick={handleCopy}
              className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-xs transition-colors shrink-0"
              title="Sao chép toàn bộ câu trả lời & trích dẫn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép kết quả'}</span>
            </button>
          </div>

          {/* Main Answer */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-950">
                Câu trả lời từ Gemini:
              </span>
              {result.foundInDossier ? (
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded-xs">
                  Xác thực từ disan.json
                </span>
              ) : (
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-900 rounded-xs">
                  Không ghi nhận trong tệp
                </span>
              )}
            </div>

            <div className="p-4 bg-amber-50/40 border border-amber-100 rounded-xs">
              <p className="text-stone-800 text-xs sm:text-sm sm:leading-relaxed leading-normal whitespace-pre-line font-normal">
                {result.answer}
              </p>
            </div>
          </div>

          {/* 4 Required Citations Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-900" />
                Căn cứ trích dẫn hồ sơ bắt buộc (4 trường):
              </span>
              <span className="text-[11px] text-stone-500 font-mono">
                {result.citations.length} nguồn tài liệu
              </span>
            </div>

            {result.citations && result.citations.length > 0 ? (
              <div className="grid grid-cols-1 gap-3.5">
                {result.citations.map((cite, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-2.5 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 bg-amber-100 text-amber-950 font-bold rounded-xs">
                        Bản ghi căn cứ #{idx + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* 1. Tên bản ghi */}
                      <div className="space-y-0.5">
                        <strong className="text-stone-500 text-[11px] uppercase tracking-wider block">
                          1. Tên bản ghi (ten_theo_danh_muc / ten_goi_ban_dia):
                        </strong>
                        <p className="font-serif font-bold text-stone-900 text-sm">
                          {cite.recordName || 'Không xác định'}
                        </p>
                      </div>

                      {/* 2. Tên cộng đồng */}
                      <div className="space-y-0.5">
                        <strong className="text-stone-500 text-[11px] uppercase tracking-wider flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-stone-400" />
                          2. Tên cộng đồng / Người cung cấp (nguoi_cung_cap):
                        </strong>
                        <p className="text-stone-800 font-medium">
                          {cite.community || 'Cộng đồng vạn chài Nam Trung Bộ'}
                        </p>
                      </div>

                      {/* 3. Địa danh */}
                      <div className="space-y-0.5">
                        <strong className="text-stone-500 text-[11px] uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          3. Địa danh (dia_danh_hien_nay / dia_danh_tai_thoi_diem_tu_lieu):
                        </strong>
                        <p className="text-stone-800">
                          {cite.location || 'Chưa định vị'}
                        </p>
                      </div>

                      {/* 4. Trường nguồn tư liệu đã dùng */}
                      <div className="space-y-0.5">
                        <strong className="text-amber-900 text-[11px] uppercase tracking-wider flex items-center gap-1 font-bold">
                          <BookOpen className="w-3 h-3 text-amber-900" />
                          4. Trường nguồn tư liệu đã dùng (nguon_tu_lieu):
                        </strong>
                        <p className="text-stone-800 font-serif italic bg-white p-2 border border-stone-200 rounded-xs">
                          "{cite.source || 'Hồ sơ điền dã di sản'}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs text-[11px] text-stone-500 italic">
                {result.foundInDossier
                  ? 'Không có trích dẫn chi tiết.'
                  : 'Vì hồ sơ disan.json không có thông tin về câu hỏi này, không phát sinh trích dẫn bản ghi.'}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
