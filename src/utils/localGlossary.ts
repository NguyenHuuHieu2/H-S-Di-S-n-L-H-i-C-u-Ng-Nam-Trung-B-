/**
 * Từ điển chú giải tiếng Việt phổ thông cho các tên gọi bản địa và thuật ngữ văn hóa làng chài Nam Trung Bộ
 */

export interface LocalGlossItem {
  localTerm: string;
  standardVietnameseGloss: string;
  category: 'dia-danh' | 'tin-nguong' | 'nghi-le' | 'ba-trao' | 'chuc-sac' | 'dao-cu';
  detailedNote?: string;
}

export const LOCAL_GLOSSARY: Record<string, LocalGlossItem> = {
  // Tên gọi bản địa trong tệp disan.json
  'Lễ Cúng Ông Nam Hải Vạn Thủy Tú': {
    localTerm: 'Lễ Cúng Ông Nam Hải Vạn Thủy Tú',
    standardVietnameseGloss: 'Đại lễ tế cá Voi và cầu trời yên biển lặng tại Lăng Vạn cổ xưa nhất Phan Thiết (Bình Thuận)',
    category: 'nghi-le',
    detailedNote: 'Lễ hội lớn nhất diễn ra vào rằm tháng 6 âm lịch hàng năm, thờ cúng bộ cốt cá voi dài 22 mét.'
  },
  'Lễ Tang Ông Lụy và Thượng ngọc cốt Vạn Đông Tác': {
    localTerm: 'Lễ Tang Ông Lụy và Thượng ngọc cốt Vạn Đông Tác',
    standardVietnameseGloss: 'Nghi lễ làm tang tế khi cá Voi dạt vào bờ và lễ cải táng đưa hài cốt cá Voi vào thờ trang trọng trong lăng',
    category: 'nghi-le',
    detailedNote: 'Người đầu tiên thấy cá voi được phong làm Trưởng nam chịu tang 3 năm; sau 3 năm cải táng ngọc cốt nhập Lăng.'
  },
  'Chèo Bả Trạo Lăng Đầm Hòn Khói': {
    localTerm: 'Chèo Bả Trạo Lăng Đầm Hòn Khói',
    standardVietnameseGloss: 'Nghệ thuật diễn xướng hát múa chèo thuyền rồng nghi lễ đưa linh hồn cá Voi và cầu mùa cá tôm',
    category: 'ba-trao',
    detailedNote: 'Biểu diễn bằng dầm chèo gỗ, kết hợp nhạc tuồng cổ và các điệu hò sông nước Đàng Trong.'
  },
  'Lễ Cúng Lăng Ông Cổ Mân - Thọ Quang': {
    localTerm: 'Lễ Cúng Lăng Ông Cổ Mân - Thọ Quang',
    standardVietnameseGloss: 'Lễ rước thần biển từ khơi vào đất liền, tế linh hồn tử sĩ và cầu mở mùa đánh bắt xa bờ tại Đà Nẵng',
    category: 'nghi-le',
    detailedNote: 'Đoàn tàu kết cờ hoa rực rỡ nghinh thần trên vịnh Đà Nẵng, mở màn mùa đánh bắt mới.'
  },
  'Hát Bả Trạo Vạn Tân Thạnh - Vũng Tàu': {
    localTerm: 'Hát Bả Trạo Vạn Tân Thạnh - Vũng Tàu',
    standardVietnameseGloss: 'Hát múa chèo thuyền cổ truyền với điệu Hò Mái Ba vượt sóng và khúc Nam Khách bi tráng tưởng nhớ tiền nhân',
    category: 'ba-trao',
    detailedNote: 'Đặc trưng bởi kỹ thuật xướng xô giữa người chỉ huy và các tay chèo hai hàng.'
  },
  'Sắc phong Nam Hải Cự Tộc Ngọc Lân Thượng Đẳng Thần': {
    localTerm: 'Sắc phong Nam Hải Cự Tộc Ngọc Lân Thượng Đẳng Thần',
    standardVietnameseGloss: 'Chiếu chỉ sắc phong chính thức của vua triều Nguyễn tôn vinh cá Voi là vị thần tối cao bảo hộ người đi biển',
    category: 'tin-nguong',
    detailedNote: 'Ban tặng từ thời vua Gia Long (1802) và các đời vua tiếp theo, quy định cấp đất và tiền dầu đèn mai táng.'
  },
  'Bộ Phục Trang Ba Tổng và Chèo Con Vạn Chài': {
    localTerm: 'Bộ Phục Trang Ba Tổng và Chèo Con Vạn Chài',
    standardVietnameseGloss: 'Quy chuẩn trang phục ba vai chính (Chỉ huy mũi, tát nước ở khoang, cầm lái đuôi) và đội ngũ người chèo thuyền',
    category: 'dao-cu',
    detailedNote: 'Tổng Mũi mặc áo thụng lam đội mão, Tổng Khoang mặc bà ba vác gàu sòng, Tổng Lái mặc võ tướng cầm chèo dài.'
  },
  'Lớp Truyền Dạy Hát Bả Trạo và Luật Vạn Làng Chài': {
    localTerm: 'Lớp Truyền Dạy Hát Bả Trạo và Luật Vạn Làng Chài',
    standardVietnameseGloss: 'Các lớp truyền dạy làn điệu dân ca nghi lễ và quy ước cứu nạn giúp đỡ nhau trên biển cho thanh thiếu niên',
    category: 'chuc-sac',
    detailedNote: 'Bảo tồn lời cổ truyền miệng và giáo dục tinh thần tương thân tương ái giữa các thuyền viên.'
  },

  // Thuật ngữ tín ngưỡng & lễ hội bản địa
  'Ông Lụy': {
    localTerm: 'Ông Lụy',
    standardVietnameseGloss: 'Hiện tượng cá Voi già yếu hoặc bị nạn dạt vào bờ biển làng chài và qua đời',
    category: 'nghi-le',
    detailedNote: 'Từ "lụy" thể hiện sự tôn kính và niềm tiếc thương sâu sắc của ngư dân, không gọi là "chết".'
  },
  'Trưởng Nam': {
    localTerm: 'Trưởng Nam (Người đội tang Ông)',
    standardVietnameseGloss: 'Ngư dân đầu tiên phát hiện cá Voi dạt vào bờ, được làng cử đại diện chịu tang 3 năm như cha mẹ',
    category: 'chuc-sac',
    detailedNote: 'Người này mặc áo gai, đội mũ rơm, quỳ đáp lễ khách viếng; làng chài chu cấp toàn bộ kinh phí.'
  },
  'Thượng Ngọc Cốt': {
    localTerm: 'Thượng Ngọc Cốt',
    standardVietnameseGloss: 'Nghi lễ cải táng sau 3 năm chôn cát, làm sạch hài cốt cá Voi bằng rượu thơm và đưa vào thờ trong lăng',
    category: 'nghi-le',
    detailedNote: 'Xương cá voi gọi là "ngọc cốt", được đặt trong các quách gỗ son hoặc thạp sành ở Hậu tẩm.'
  },
  'Bả Trạo': {
    localTerm: 'Bả Trạo',
    standardVietnameseGloss: 'Cầm chắc mái chèo (Bả = nắm chặt, Trạo = mái chèo); đội hình diễn xướng hát múa chèo thuyền linh thiêng',
    category: 'ba-trao',
    detailedNote: 'Mô phỏng chuyến vượt biển của chiếc thuyền rồng đưa linh hồn cá Voi và dẫn đường luồng cá.'
  },
  'Nghinh Thủy Lục': {
    localTerm: 'Nghinh Thủy Lục',
    standardVietnameseGloss: 'Nghi thức rước linh thần cá Voi từ ngoài biển khơi (đường thủy) về an vị tại lăng miếu (đường bộ)',
    category: 'nghi-le',
    detailedNote: 'Đoàn thuyền kết cờ hoa ra biển làm lễ xin keo rồi rước kiệu thần vào đất liền.'
  },
  'Vạn Chài': {
    localTerm: 'Vạn Chài (Vạn ngư)',
    standardVietnameseGloss: 'Tổ chức cộng đồng làng nghề tự quản của ngư dân miền Trung, có hương ước và lăng miếu riêng',
    category: 'chuc-sac',
    detailedNote: 'Tương trợ các gia đình ngư dân gặp rủi ro và điều hành các kỳ tế tự biển.'
  },
  'Tổng Mũi': {
    localTerm: 'Tổng Mũi',
    standardVietnameseGloss: 'Người lĩnh xướng chỉ huy đứng ở đầu mũi thuyền, tay cầm sênh tiền hoặc cờ lệnh điều khiển nhịp',
    category: 'ba-trao',
    detailedNote: 'Mặc áo thụng lam hoặc vàng, giọng hát vang khỏe mở màn cho từng chặng chèo.'
  },
  'Tổng Khoang': {
    localTerm: 'Tổng Khoang',
    standardVietnameseGloss: 'Người đứng giữa thuyền làm nhiệm vụ tát nước, mang nét diễn hài hước dí dỏm tạo tiếng cười lạc quan',
    category: 'ba-trao',
    detailedNote: 'Mặc áo bà ba, tay cầm gàu mo cau, xướng các điệu lý vui nhộn về tôm cá.'
  },
  'Tổng Lái': {
    localTerm: 'Tổng Lái',
    standardVietnameseGloss: 'Thuyền trưởng đứng ở đuôi thuyền giữ mái chèo dài, chỉ huy hướng đi vượt qua sóng gió',
    category: 'ba-trao',
    detailedNote: 'Mặc lễ phục quan tướng, thể hiện khúc Nam Ai sâu lắng tri ân thần biển.'
  },
  'Trạo Phu': {
    localTerm: 'Trạo Phu (Con trạo / Trạo tử)',
    standardVietnameseGloss: 'Những người chèo thuyền trong đội hát bả trạo, đứng thành hai hàng đều nhau vừa chèo vừa hát xô',
    category: 'ba-trao',
    detailedNote: 'Thanh niên khỏe mạnh mặc áo nẹp đỏ, cầm mái chèo sơn màu xanh đỏ tượng trưng âm dương.'
  },
  'Hò Mái Ba': {
    localTerm: 'Hò Mái Ba',
    standardVietnameseGloss: 'Điệu hò sông biển dũng mãnh, nhịp điệu dứt khoát mô phỏng động tác chèo thuyền ngược sóng dữ',
    category: 'ba-trao',
    detailedNote: 'Một người xướng ba nhịp, toàn thể đội chèo đồng thanh hô xô phụ họa.'
  },
  'Hát Nam Ai': {
    localTerm: 'Hát Nam Ai',
    standardVietnameseGloss: 'Khúc hát bi ai, nghẹn ngào bày tỏ lòng thương xót khi cá Voi qua đời dạt vào bờ làng',
    category: 'ba-trao',
    detailedNote: 'Mang âm hưởng than khóc da diết kết hợp giữa điệu ru miền Trung và điệu ai sân khấu tuồng.'
  },
  'Hát Nam Khách': {
    localTerm: 'Hát Nam Khách',
    standardVietnameseGloss: 'Khúc hát bi tráng hào sảng, ca ngợi lòng dũng cảm của người đi biển và công đức cứu nạn của thần cá Voi',
    category: 'ba-trao',
    detailedNote: 'Nhịp điệu nhanh, dồn dập, thể hiện tinh thần vượt bão tố hiểm nguy.'
  },
  'Hát Lý Con Cá': {
    localTerm: 'Hát Lý Con Cá',
    standardVietnameseGloss: 'Điệu hát vui tươi, nhộn nhịp mô tả các loài hải sản và niềm vui khi thuyền về đầy ắp cá tôm',
    category: 'ba-trao',
    detailedNote: 'Do Tổng Khoang lĩnh xướng với động tác quẫy gàu tát nước ngộ nghĩnh.'
  },
  'Dầm Trạo': {
    localTerm: 'Dầm Trạo',
    standardVietnameseGloss: 'Mái chèo gỗ thiêng dùng trong biểu diễn bả trạo, hai mặt sơn màu xanh và đỏ tượng trưng cho trời đất âm dương',
    category: 'dao-cu',
    detailedNote: 'Được giữ gìn cẩn thận trong lăng miếu, chỉ đưa ra sử dụng vào dịp hội tế thần.'
  },
  'Đụn Cát': {
    localTerm: 'Đụn Cát (Mộ táng cá Ông)',
    standardVietnameseGloss: 'Khu đồi cát trắng ven biển dành riêng để chôn cất thi hài cá Voi trong 3 năm trước khi cải táng',
    category: 'nghi-le',
    detailedNote: 'Khu vực tôn nghiêm có rào chắn, người dân qua lại đều nghiêng mình kính cẩn.'
  }
};

/**
 * Tra cứu chú giải tiếng Việt phổ thông cho một tên gọi bản địa
 */
export function getStandardGloss(term: string): string {
  if (!term) return '';
  const cleanTerm = term.trim();
  
  // Exact match
  if (LOCAL_GLOSSARY[cleanTerm]) {
    return LOCAL_GLOSSARY[cleanTerm].standardVietnameseGloss;
  }
  
  // Fuzzy match
  const lower = cleanTerm.toLowerCase();
  for (const [key, item] of Object.entries(LOCAL_GLOSSARY)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return item.standardVietnameseGloss;
    }
  }

  // Fallback heuristic based on keywords
  if (lower.includes('bả trạo') || lower.includes('chèo')) {
    return 'Nghệ thuật diễn xướng hát múa chèo thuyền nghi lễ cầu mùa biển của ngư dân Nam Trung Bộ';
  }
  if (lower.includes('ông lụy') || lower.includes('tang')) {
    return 'Nghi thức tang lễ thiêng liêng khi cá Voi dạt vào bờ biển làng chài';
  }
  if (lower.includes('nghinh') || lower.includes('thủy lục')) {
    return 'Lễ rước thần biển từ ngoài khơi về đất liền để mở đầu ngày hội tế';
  }
  if (lower.includes('sắc phong')) {
    return 'Chiếu phong thần chính thức của triều đình phong kiến tôn vinh thần biển';
  }
  if (lower.includes('ngọc cốt')) {
    return 'Di hài xương cá voi được bảo tồn tôn nghiêm trong lăng miếu';
  }

  return 'Thực hành tín ngưỡng dân gian đặc trưng của cộng đồng ngư dân duyên hải miền Trung';
}
