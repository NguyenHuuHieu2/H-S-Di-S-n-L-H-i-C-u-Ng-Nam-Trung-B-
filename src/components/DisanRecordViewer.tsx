import React, { useState, useMemo } from 'react';
import rawDisanData from '../data/disan.json';
import { DiSanRecord } from '../types';
import { getStandardGloss } from '../utils/localGlossary';
import { 
  Database, 
  FileCode, 
  Download, 
  Copy, 
  Check, 
  Search, 
  Upload, 
  PlusCircle, 
  Eye, 
  Sparkles,
  Info,
  MapPin,
  UserCheck,
  ShieldAlert,
  BookOpen,
  Languages
} from 'lucide-react';

const SAMPLE_DISAN_RECORD: DiSanRecord = {
  ten_theo_danh_muc: 'Lễ hội Cầu ngư Vạn Thủy Tú',
  ten_goi_ban_dia: 'Lễ Cúng Ông Nam Hải Vạn Thủy Tú',
  thuc_hanh_di_san: 'Nghi lễ nghinh Thần thủy lục, tế tiền hiền hậu hiền, hát bội và diễn xướng Chèo Bả Trạo vạn chài',
  vung_van_hoa: 'Duyên hải Nam Trung Bộ (Bình Thuận)',
  dan_toc: 'Kinh (Việt)',
  dia_danh_hien_nay: 'Đường Ngư Ông, phường Đức Thắng, thành phố Phan Thiết, tỉnh Bình Thuận',
  dia_danh_tai_thoi_diem_tu_lieu: 'Vạn Thủy Tú, làng Đức Thắng, tổng Đức Thắng, phủ Hàm Thuận, tỉnh Bình Thuận (thời Nguyễn)',
  mo_ta: 'Di tích Lăng Vạn Thủy Tú xây dựng năm Nhâm Ngọ (1762), nơi lưu giữ bộ cốt Ông Nam Hải lớn nhất Đông Nam Á dài gần 22 mét, nặng 65 tấn. Lễ hội diễn ra mỗi năm 5 kỳ tế tự, lớn nhất vào rằm tháng 6 âm lịch.',
  boi_canh_dien_xuong: 'Sân đình tiền điện Lăng Vạn Thủy Tú và khu vực cửa sông Cà Ty trước khi thuyền ra khơi nghinh thủy lục',
  nguoi_cung_cap: 'Ban Quản trị Vạn Thủy Tú, Cụ Lê Văn Cường (Tổng Lái) và các bô lão vạn chài Đức Thắng',
  pham_vi_duoc_phep_su_dung: 'Phi thương mại, nghiên cứu khoa học, giáo dục truyền thống văn hóa biển và quảng bá hồ sơ số di sản quốc gia',
  nguon_tu_lieu: 'Hương ước vạn chài Vạn Thủy Tú (khắc lập 1762), 24 đạo sắc phong triều Nguyễn và hồ sơ di sản quốc gia'
};

export const DisanRecordViewer: React.FC = () => {
  const initialRecords = useMemo(() => {
    return Array.isArray(rawDisanData) ? (rawDisanData as DiSanRecord[]) : [];
  }, []);

  const [records, setRecords] = useState<DiSanRecord[]>(initialRecords);
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newRecord, setNewRecord] = useState<DiSanRecord>({
    ten_theo_danh_muc: '',
    ten_goi_ban_dia: '',
    thuc_hanh_di_san: '',
    vung_van_hoa: 'Duyên hải Nam Trung Bộ',
    dan_toc: 'Kinh (Việt)',
    dia_danh_hien_nay: '',
    dia_danh_tai_thoi_diem_tu_lieu: '',
    mo_ta: '',
    boi_canh_dien_xuong: '',
    nguoi_cung_cap: '',
    pham_vi_duoc_phep_su_dung: 'Phi thương mại, nghiên cứu, giáo dục cộng đồng',
    nguon_tu_lieu: ''
  });

  const hasPopulatedData = useMemo(() => {
    return records.some(
      (r) => (r.ten_theo_danh_muc && r.ten_theo_danh_muc.trim() !== '') || 
             (r.ten_goi_ban_dia && r.ten_goi_ban_dia.trim() !== '') ||
             (r.mo_ta && r.mo_ta.trim() !== '')
    );
  }, [records]);

  const displayRecords = useMemo(() => {
    let source = records;
    if (!hasPopulatedData && showSample) {
      source = [SAMPLE_DISAN_RECORD];
    }
    if (!searchTerm.trim()) return source;

    const term = searchTerm.toLowerCase();
    return source.filter(
      (r) =>
        r.ten_theo_danh_muc.toLowerCase().includes(term) ||
        r.ten_goi_ban_dia.toLowerCase().includes(term) ||
        r.thuc_hanh_di_san.toLowerCase().includes(term) ||
        r.dia_danh_hien_nay.toLowerCase().includes(term) ||
        r.nguoi_cung_cap.toLowerCase().includes(term) ||
        r.vung_van_hoa.toLowerCase().includes(term)
    );
  }, [records, hasPopulatedData, showSample, searchTerm]);

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(hasPopulatedData ? records : [SAMPLE_DISAN_RECORD], null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJson = (useSample = false) => {
    const dataToDownload = useSample ? [SAMPLE_DISAN_RECORD] : records;
    const blob = new Blob([JSON.stringify(dataToDownload, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'disan.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          setRecords(parsed);
          setShowSample(false);
        } else {
          alert('Tệp JSON cần là một danh sách các bản ghi dạng mảng: [ { ... } ]');
        }
      } catch (err) {
        alert('Tệp không đúng định dạng JSON hợp lệ.');
      }
    };
    reader.readAsText(file);
  };

  const handleAddNewRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRecord.ten_theo_danh_muc.trim()) {
      alert('Vui lòng nhập "Tên theo danh mục"');
      return;
    }
    const updated = hasPopulatedData ? [...records, newRecord] : [newRecord];
    setRecords(updated);
    setIsAddingNew(false);
    setNewRecord({
      ten_theo_danh_muc: '',
      ten_goi_ban_dia: '',
      thuc_hanh_di_san: '',
      vung_van_hoa: 'Duyên hải Nam Trung Bộ',
      dan_toc: 'Kinh (Việt)',
      dia_danh_hien_nay: '',
      dia_danh_tai_thoi_diem_tu_lieu: '',
      mo_ta: '',
      boi_canh_dien_xuong: '',
      nguoi_cung_cap: '',
      pham_vi_duoc_phep_su_dung: 'Phi thương mại, nghiên cứu, giáo dục cộng đồng',
      nguon_tu_lieu: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Station: Simple, readable layout */}
      <div className="bg-stone-50 border border-stone-200 p-5 sm:p-6 rounded-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-amber-900 text-amber-50 rounded-xs">
                <Database className="w-5 h-5" />
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                Hồ Sơ Điền Dã Khảo Tả: <code className="text-amber-900 font-mono text-sm bg-amber-100 px-2 py-0.5 rounded border border-amber-300">disan.json</code>
              </h3>
            </div>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Tệp dữ liệu độc lập gồm 12 trường khảo tả chuẩn hóa. Mọi tên gọi bản địa đều được hiển thị cùng <strong>chú giải tiếng Việt phổ thông</strong> rõ ràng, dễ hiểu cho người dân và sinh viên.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button
              onClick={() => handleDownloadJson(false)}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xs transition-colors"
              title="Tải tệp disan.json về máy"
            >
              <Download className="w-4 h-4" />
              <span>Tải disan.json</span>
            </button>

            <button
              onClick={handleCopyJson}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-medium rounded-xs transition-colors"
              title="Sao chép toàn bộ cấu trúc JSON"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép JSON'}</span>
            </button>

            <label className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-medium rounded-xs transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>Nạp tệp JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <button
              onClick={() => setIsAddingNew(!isAddingNew)}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white font-medium rounded-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{isAddingNew ? 'Đóng biểu mẫu' : 'Thêm bản ghi'}</span>
            </button>
          </div>
        </div>

        {/* 12-Field Specification Guide Bar: Larger fonts */}
        <div className="p-4 bg-white border border-stone-200 rounded-xs text-xs sm:text-sm text-stone-700 space-y-1.5">
          <strong className="text-stone-900 block font-semibold text-sm sm:text-base">
            Danh mục 12 trường thuộc tính tiêu chuẩn của mỗi bản ghi khảo tả:
          </strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 font-mono text-xs sm:text-sm text-stone-800 pt-1">
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">1. ten_theo_danh_muc</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">2. ten_goi_ban_dia</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">3. thuc_hanh_di_san</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">4. vung_van_hoa</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">5. dan_toc</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">6. dia_danh_hien_nay</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">7. dia_danh_tai_thoi_diem_tu_lieu</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">8. mo_ta</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">9. boi_canh_dien_xuong</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">10. nguoi_cung_cap</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">11. pham_vi_duoc_phep_su_dung</span>
            <span className="bg-stone-50 px-2 py-1 rounded border border-stone-200">12. nguon_tu_lieu</span>
          </div>
        </div>
      </div>

      {/* Form: Large, comfortable touch fields */}
      {isAddingNew && (
        <form onSubmit={handleAddNewRecord} className="bg-amber-50/70 border-2 border-amber-900/30 p-5 sm:p-7 rounded-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-amber-900/20">
            <h4 className="font-serif font-bold text-base sm:text-lg text-amber-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-800" />
              Nhập Bản Ghi Khảo Tả Mới (12 Trường Chuẩn)
            </h4>
            <span className="text-xs sm:text-sm text-amber-900 font-medium">Bảng mã UTF-8 có dấu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                1. Tên theo danh mục <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="VD: Lễ hội Cầu ngư Vạn Thủy Tú"
                value={newRecord.ten_theo_danh_muc}
                onChange={(e) => setNewRecord({ ...newRecord, ten_theo_danh_muc: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                2. Tên gọi bản địa (Địa phương)
              </label>
              <input
                type="text"
                placeholder="VD: Lễ Cúng Ông Nam Hải"
                value={newRecord.ten_goi_ban_dia}
                onChange={(e) => setNewRecord({ ...newRecord, ten_goi_ban_dia: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
              {newRecord.ten_goi_ban_dia && (
                <div className="mt-1 text-xs text-stone-600 italic">
                  💡 Gợi ý chú giải phổ thông: {getStandardGloss(newRecord.ten_goi_ban_dia)}
                </div>
              )}
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                3. Thực hành di sản
              </label>
              <input
                type="text"
                placeholder="VD: Hát Bả Trạo, Tế lễ, Nghinh thủy lục"
                value={newRecord.thuc_hanh_di_san}
                onChange={(e) => setNewRecord({ ...newRecord, thuc_hanh_di_san: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                4. Vùng văn hoá
              </label>
              <input
                type="text"
                placeholder="VD: Duyên hải Nam Trung Bộ"
                value={newRecord.vung_van_hoa}
                onChange={(e) => setNewRecord({ ...newRecord, vung_van_hoa: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                5. Dân tộc
              </label>
              <input
                type="text"
                placeholder="VD: Kinh (Việt)"
                value={newRecord.dan_toc}
                onChange={(e) => setNewRecord({ ...newRecord, dan_toc: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                6. Địa danh hiện nay
              </label>
              <input
                type="text"
                placeholder="VD: Đường Ngư Ông, P. Đức Thắng, TP. Phan Thiết"
                value={newRecord.dia_danh_hien_nay}
                onChange={(e) => setNewRecord({ ...newRecord, dia_danh_hien_nay: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                7. Địa danh tại thời điểm tư liệu
              </label>
              <input
                type="text"
                placeholder="VD: Vạn Thủy Tú, phủ Hàm Thuận (thời Nguyễn)"
                value={newRecord.dia_danh_tai_thoi_diem_tu_lieu}
                onChange={(e) => setNewRecord({ ...newRecord, dia_danh_tai_thoi_diem_tu_lieu: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                8. Người cung cấp
              </label>
              <input
                type="text"
                placeholder="VD: Ban Quản lý Vạn & Cụ Lê Văn Cường"
                value={newRecord.nguoi_cung_cap}
                onChange={(e) => setNewRecord({ ...newRecord, nguoi_cung_cap: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                9. Nguồn tư liệu
              </label>
              <input
                type="text"
                placeholder="VD: Hương ước 1762, Sắc phong triều Nguyễn..."
                value={newRecord.nguon_tu_lieu}
                onChange={(e) => setNewRecord({ ...newRecord, nguon_tu_lieu: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-900 mb-1">
                10. Bối cảnh diễn xướng
              </label>
              <input
                type="text"
                placeholder="VD: Sân đình tiền điện Lăng Ông và cửa biển..."
                value={newRecord.boi_canh_dien_xuong}
                onChange={(e) => setNewRecord({ ...newRecord, boi_canh_dien_xuong: e.target.value })}
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
              />
            </div>
          </div>

          <div className="text-sm">
            <label className="block font-semibold text-stone-900 mb-1">
              11. Phạm vi được phép sử dụng
            </label>
            <input
              type="text"
              placeholder="VD: Phi thương mại, nghiên cứu khoa học, giáo dục cộng đồng..."
              value={newRecord.pham_vi_duoc_phep_su_dung}
              onChange={(e) => setNewRecord({ ...newRecord, pham_vi_duoc_phep_su_dung: e.target.value })}
              className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
            />
          </div>

          <div className="text-sm">
            <label className="block font-semibold text-stone-900 mb-1">
              12. Khảo tả chi tiết nội dung di sản (mo_ta) <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Khảo tả đầy đủ lịch sử, quy mô lăng miếu, hiện vật ngọc cốt, thứ tự các bước hành lễ và diễn xướng..."
              value={newRecord.mo_ta}
              onChange={(e) => setNewRecord({ ...newRecord, mo_ta: e.target.value })}
              className="w-full p-3.5 bg-white border border-stone-300 rounded-xs text-sm sm:text-base focus:outline-none focus:border-amber-900 shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="min-h-[46px] px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm font-semibold rounded-xs transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="min-h-[46px] px-6 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-sm font-semibold rounded-xs transition-colors shadow-xs"
            >
              Lưu bản ghi vào danh sách
            </button>
          </div>
        </form>
      )}

      {/* Search Input: Large font & clear touch target */}
      <div className="relative">
        <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Tìm kiếm nhanh bản ghi theo tên danh mục, tên bản địa, thực hành, địa danh..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full min-h-[48px] pl-11 pr-4 py-3 bg-white border border-stone-300 rounded-xs text-sm sm:text-base text-stone-900 focus:outline-none focus:border-amber-900 shadow-xs"
        />
      </div>

      {/* Records List: Large fonts, clear structure, indigenous name with standard Vietnamese gloss */}
      {displayRecords.length > 0 ? (
        <div className="space-y-5">
          {displayRecords.map((item, idx) => {
            const standardGloss = getStandardGloss(item.ten_goi_ban_dia || item.ten_theo_danh_muc);
            return (
              <article
                key={idx}
                className="bg-white border-2 border-stone-200 rounded-xs p-5 sm:p-7 shadow-xs space-y-4 hover:border-amber-400 transition-colors"
              >
                {/* Header: Title & Category */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-stone-200 pb-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 bg-stone-100 text-stone-800 rounded-xs">
                        Bản ghi #{idx + 1}
                      </span>
                      {item.vung_van_hoa && (
                        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider">
                          {item.vung_van_hoa}
                        </span>
                      )}
                      {item.dan_toc && (
                        <span className="text-xs sm:text-sm text-stone-600">
                          · Dân tộc {item.dan_toc}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 pt-1">
                      {item.ten_theo_danh_muc || 'Chưa đặt tên theo danh mục'}
                    </h4>
                  </div>

                  {item.thuc_hanh_di_san && (
                    <span className="inline-block text-xs sm:text-sm font-semibold px-3 py-1.5 bg-amber-50 text-amber-950 border border-amber-300 rounded-xs self-start">
                      {item.thuc_hanh_di_san}
                    </span>
                  )}
                </div>

                {/* Indigenous Name alongside Standard Vietnamese Gloss (Crucial User Requirement) */}
                {item.ten_goi_ban_dia && (
                  <div className="p-3.5 sm:p-4 bg-amber-50/90 border border-amber-300/80 rounded-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-950">
                      <Languages className="w-4 h-4 text-amber-800 shrink-0" />
                      <strong className="text-xs sm:text-sm uppercase tracking-wider font-bold">
                        Đối Chiếu Ngôn Ngữ & Danh Xưng Bản Địa:
                      </strong>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-xs text-amber-900 font-semibold block">
                          Tên gọi bản địa (Địa phương):
                        </span>
                        <p className="font-serif font-bold text-base sm:text-lg text-amber-950">
                          "{item.ten_goi_ban_dia}"
                        </p>
                      </div>

                      <div>
                        <span className="text-xs text-stone-600 font-semibold block">
                          Chú giải tiếng Việt phổ thông:
                        </span>
                        <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                          {standardGloss}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Geographical & Historical Localization: Large, easy to read */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-3.5 bg-stone-50 rounded-xs text-sm sm:text-base">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-1" />
                    <div>
                      <strong className="text-stone-700 block text-xs uppercase tracking-wider">
                        Địa danh hiện nay:
                      </strong>
                      <p className="text-stone-900 font-medium mt-0.5">
                        {item.dia_danh_hien_nay || 'Chưa cung cấp'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-amber-800 shrink-0 mt-1" />
                    <div>
                      <strong className="text-stone-700 block text-xs uppercase tracking-wider">
                        Địa danh tại thời điểm tư liệu:
                      </strong>
                      <p className="text-stone-900 font-medium mt-0.5">
                        {item.dia_danh_tai_thoi_diem_tu_lieu || 'Chưa cung cấp'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Description (mo_ta): Large readable text for phones */}
                {item.mo_ta && (
                  <div className="space-y-1.5 pt-1">
                    <span className="font-bold uppercase tracking-wider text-stone-600 text-xs block">
                      Khảo tả chi tiết nội dung di sản:
                    </span>
                    <p className="text-stone-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                      {item.mo_ta}
                    </p>
                  </div>
                )}

                {/* Context of Performance */}
                {item.boi_canh_dien_xuong && (
                  <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xs space-y-1 text-sm sm:text-base">
                    <strong className="text-amber-950 text-xs sm:text-sm uppercase tracking-wider block">
                      Bối cảnh diễn xướng & Không gian thiêng:
                    </strong>
                    <p className="text-stone-800 leading-relaxed">
                      {item.boi_canh_dien_xuong}
                    </p>
                  </div>
                )}

                {/* Footer Meta: Informant, Rights, Sources */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-200 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-2">
                    <UserCheck className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Người cung cấp:</strong>
                      <span>{item.nguoi_cung_cap || 'Khuyết danh'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Phạm vi sử dụng:</strong>
                      <span>{item.pham_vi_duoc_phep_su_dung || 'Nội bộ'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FileCode className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block font-semibold">Nguồn tư liệu:</strong>
                      <span className="font-serif italic">{item.nguon_tu_lieu || 'Điền dã cộng đồng'}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="border border-dashed border-stone-300 p-8 text-center rounded-xs space-y-3">
          <Database className="w-8 h-8 text-stone-400 mx-auto" />
          <p className="text-sm sm:text-base text-stone-600">
            Không tìm thấy bản ghi nào phù hợp với từ khóa "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
};
