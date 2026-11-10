import React from 'react';
import { PWAInstallButton } from '../components/PWAInstallButton';

export const Screen6About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
      {/* Screen Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1.5">
          <span>Màn Hình 6</span>
          <span aria-hidden="true">·</span>
          <span>Sứ Mệnh & Thông Tin Đơn Vị Phát Triển</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Giới Thiệu Dự Án Hồ Sơ Số Di Sản
        </h1>
        <p className="mt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
          Công trình số hóa bảo tồn di sản văn hóa phi vật thể quốc gia về "Lễ hội Cầu ngư và tín ngưỡng ngư dân Nam Trung Bộ" — vì sự trường tồn của văn hóa biển đảo quê hương.
        </p>
      </div>

      {/* Credit Box: Thực tập sinh FPT Polytechnic & IMTA TECH */}
      <div className="bg-amber-900 text-amber-50 p-6 sm:p-7 rounded-sm shadow-sm border border-amber-800 space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300 font-bold">
          <span>✦ THÔNG TIN TÁC GIẢ & ĐƠN VỊ THỰC HIỆN</span>
        </div>
        <div className="p-4 bg-amber-950/70 border border-amber-700/80 rounded-xs space-y-2">
          <p className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
            Sản phẩm thực tập của Nguyễn Hữu Hiếu, mã sinh viên PH69928, Nhóm 2, Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH, dự án xã hội phi lợi nhuận.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-200/90 pt-2 border-t border-amber-800/80">
            <div>
              <span className="text-amber-400 block font-semibold">Tác giả thực hiện:</span>
              <span>Nguyễn Hữu Hiếu (MSV: PH69928) - Nhóm 2</span>
            </div>
            <div>
              <span className="text-amber-400 block font-semibold">Đơn vị & Chương trình:</span>
              <span>Chương trình Thực tập sinh Đợt 15 FPT Polytechnic & IMTA TECH</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-amber-400 block font-semibold">Tính chất dự án:</span>
              <span>Dự án xã hội phi lợi nhuận phục vụ bảo tồn di sản văn hóa dân gian làng chài miền Trung.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Purpose */}
      <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100">
          Mục Đích & Sứ Mệnh
        </h2>
        <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-3 font-normal">
          <p>
            Dọc dải duyên hải Nam Trung Bộ từ Đà Nẵng đến Bình Thuận, <strong>Lễ hội Cầu ngư</strong> không chỉ là một nghi lễ tâm linh mà còn là bảo tàng sống về lịch sử mở cõi, nghệ thuật diễn xướng dân gian (Hát Bả Trạo) và tinh thần tương thân tương ái của con người trước đại dương bao la.
          </p>
          <p>
            Dự án hồ sơ số này được xây dựng với mục tiêu:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-stone-600">
            <li><strong>Giúp lớp trẻ và thế hệ kế cận trong làng chài:</strong> Dễ dàng tiếp cận, tự hào và tự học các điệu hát múa Bả Trạo, nắm vững ý nghĩa các nghi thức Nghinh Ông cổ truyền của cha ông.</li>
            <li><strong>Hỗ trợ sinh viên và các nhà nghiên cứu văn hóa:</strong> Tra cứu nhanh nguồn tư liệu sắc phong chữ Hán-Nôm, niên đại các vạn chài và ghi chép điền dã chuẩn xác.</li>
            <li><strong>Đồng hành cùng cán bộ làm công tác văn hóa cơ sở:</strong> Cung cấp cẩm nang bỏ túi, bảng kiểm tiến độ tổ chức lễ hội và bản mẫu văn khấn, văn tế phục vụ công tác bảo tồn tại xã, phường, thị trấn ven biển.</li>
          </ul>
        </div>
      </div>

      {/* Target Audience Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
          <strong className="text-amber-900 block font-serif text-sm">
            1. Người Dân & Lớp Trẻ Làng Chài
          </strong>
          <p className="text-stone-600 leading-relaxed">
            Tra cứu ngày mở hội, học câu hát Bả Trạo qua trình gõ nhịp Web Audio, đóng góp ký ức câu chuyện Ông cứu nạn của gia đình.
          </p>
        </div>

        <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
          <strong className="text-amber-900 block font-serif text-sm">
            2. Sinh Viên & Học Sinh
          </strong>
          <p className="text-stone-600 leading-relaxed">
            Nguồn học tập trực quan, trắc nghiệm di sản, phiếu điền dã phỏng vấn nghệ nhân phục vụ bài tập lớn và đề tài nghiên cứu.
          </p>
        </div>

        <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs space-y-1.5">
          <strong className="text-amber-900 block font-serif text-sm">
            3. Cán Bộ Văn Hóa Cơ Sở
          </strong>
          <p className="text-stone-600 leading-relaxed">
            Bảng kiểm quy trình tổ chức, các điều kiêng cữ cổ truyền cần phổ biến cho du khách và bản mẫu văn khấn sao chép 1 chạm.
          </p>
        </div>
      </div>

      {/* Mobile & Offline Usage Guide */}
      <div className="bg-amber-50/70 border border-amber-200/80 p-6 rounded-sm space-y-3 text-xs sm:text-sm text-amber-950">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-base text-amber-950">
            Hướng Dẫn Sử Dụng Trên Điện Thoại & Ngoại Tuyến (Offline)
          </h3>
          <PWAInstallButton />
        </div>

        <div className="space-y-2 text-amber-900 leading-relaxed text-xs">
          <p>✦ <strong>Cài đặt vào điện thoại (PWA):</strong> Bấm nút "Cài Ứng Dụng" ở góc trên hoặc thanh menu Safari ("Thêm vào MH chính") để dùng như app di động native.</p>
          <p>✦ <strong>Sử dụng khi mất sóng biển:</strong> Toàn bộ dữ liệu hồ sơ đã được tự động lưu vào bộ nhớ đệm. Bạn có thể mở ứng dụng tra cứu bất cứ lúc nào ngoài khơi hoặc ở sân lăng mà không cần mạng.</p>
          <p>✦ <strong>Chế độ mạng yếu:</strong> Bật công tắc "Mạng Yếu (Tải Nhanh)" tại trang chủ để tối ưu tốc độ đọc khi kết nối 3G/4G chập chờn.</p>
        </div>
      </div>

      {/* Institutional Provenance & Contact */}
      <div className="bg-white border border-stone-200 p-6 sm:p-7 rounded-sm shadow-xs space-y-3.5 text-xs sm:text-sm">
        <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 pb-2 border-b border-stone-100">
          Ghi Nhận Đơn Vị & Kênh Đóng Góp
        </h3>
        <p className="text-stone-700 leading-relaxed">
          Ứng dụng được xây dựng trên cơ sở tập hợp tư liệu điền dã dân gian, các công trình nghiên cứu của Viện Âm nhạc, Viện Văn hóa Nghệ thuật Quốc gia Việt Nam, Sở Văn hóa - Thể thao các tỉnh Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa, Ninh Thuận, Bình Thuận cùng sự cộng tác nhiệt thành của các Ban Quản lý Lăng Ông Nam Hải.
        </p>
        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xs text-xs space-y-1.5 text-stone-700">
          <p>✦ <strong>Đơn vị thực hiện:</strong> Sản phẩm thực tập của Nguyễn Hữu Hiếu, mã sinh viên PH69928, Nhóm 2, Chương trình Thực tập sinh Đợt 15 FPT Polytechnic và IMTA TECH, dự án xã hội phi lợi nhuận.</p>
          <p>✦ <strong>Kênh tiếp nhận tư liệu:</strong> Mục "Ký ức làng chài" tại Màn hình 5 hoặc biểu mẫu Hỏi đáp tại Màn hình 4.</p>
          <p>✦ <strong>Bản quyền nội dung:</strong> Di sản văn hóa phi vật thể thuộc sở hữu của cộng đồng ngư dân duyên hải Việt Nam.</p>
        </div>
      </div>
    </div>
  );
};
