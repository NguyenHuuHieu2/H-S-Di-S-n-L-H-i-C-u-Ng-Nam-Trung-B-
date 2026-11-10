import {
  RitualStep,
  BaTraoRole,
  HeritageSite,
  GlossaryTerm,
  ImperialEdict,
  CommunityNote,
  MelodyItem,
  FaqItem,
} from '../types';

export const RITUAL_STEPS: RitualStep[] = [
  {
    id: 'khoi-sac',
    order: 1,
    timeSlot: '14:00 - Chiều ngày Tiền tế',
    title: 'Lễ Khởi Sắc & Thỉnh Linh Tiền Hiền',
    shortDesc: 'Rước hòm sắc phong từ Nhà Tiền Hiền hoặc tư gia Chánh bái về an vị tại chánh điện Lăng Ông.',
    location: 'Từ Nhà Tiền hiền / Nhà thờ Vạn trưởng đến Lăng Nam Hải',
    keyActors: ['Chánh bái', 'Ban Vạn sự', 'Đội chấp kích', 'Đoàn chiêng trống bát âm'],
    offerings: ['Hương trầm hảo hạng', 'Trầu cau tơ', 'Rượu cúc', 'Hoa tươi ngũ sắc'],
    significance: 'Báo cáo với các bậc tiền nhân khai canh khai cư lập làng, xin phép thỉnh các đạo sắc phong vua ban ra Lăng để chuẩn bị nghinh thần nhập điện.',
    detailedSteps: [
      'Ban nghi lễ hội tụ tại nhà Tiền hiền, y phục chỉnh tề trong áo dài thụng lam, khăn đóng đen.',
      'Chánh bái thắp hương dâng trà rượu, cúc cung bái lạy ba lạy bốn vái trước bài vị Tiền hiền.',
      'Bốn thanh niên trai tráng tinh sạch khiêng long kiệu sơn son chứa tráp sắc phong triều Nguyễn.',
      'Đoàn rước diễu qua trục đường chính của làng chài ven biển trong tiếng nhạc cổ bồng và tiếng pháo lệnh rộn rã.'
    ],
    chantSnippet: {
      title: 'Khấn cáo Tiền hiền',
      verse: [
        'Nhớ xưa khai cơ lập vạn,',
        'Bám sóng bám ghềnh gây dựng ngư thôn.',
        'Nay nhằm tiết lệnh Cầu ngư,',
        'Cung thỉnh sắc quý về ngự Lăng đường.'
      ],
      meaning: 'Tri ân công đức mở cõi lập làng của tiền nhân, xin phép rước sắc thần mở đại hội.'
    }
  },
  {
    id: 'nghinh-thuy-luc',
    order: 2,
    timeSlot: '04:00 - 07:00 Sáng ngày Chánh hội',
    title: 'Lễ Nghinh Thần Trên Biển (Nghinh Ông Thủy Lục)',
    shortDesc: 'Đoàn thuyền rồng rực rỡ cờ ngũ hành vượt sóng ra khơi xa, làm lễ xin keo thỉnh linh vị Đức Ngư Ông về Lăng.',
    location: 'Bến lộng làng chài ra vùng biển khơi (khoảng 2-3 hải lý ngoài biển)',
    keyActors: ['Chánh chủ tế', 'Thuyền trưởng tàu rước kiệu', 'Đội nhạc cổ hải lục', 'Đoàn thuyền hoa ngư dân'],
    offerings: ['Hương hoa phong đăng', 'Trái cây ngũ quả', 'Trà rượu tinh khiết (tuyệt đối không dùng thịt heo ngoài biển)'],
    significance: 'Đón nhận linh khí của Đại Càn Nam Hải Thượng Đẳng Thần từ biển cả bao la về bờ, chở che cho ngư dân sóng yên biển lặng, cá mực bội thu.',
    detailedSteps: [
      'Lúc 4 giờ sáng, khi sao mai còn sáng, hồi trống lệnh thứ nhất vang lên thúc giục hàng chục tàu thuyền nổ máy hướng mũi ra biển.',
      'Thuyền chính (thuyền dẫn đầu) trang trí đầu rồng, cắm cờ Tiêu biểu hoàng sắc, đặt bàn hương án và long đình lộng lẫy.',
      'Đến tọa độ hải phận linh thiêng ngoài khơi, tàu dừng máy bồng bềnh trên sóng biếc, hương trầm tỏa nghi ngút.',
      'Chánh bái khấn nguyện và gieo đôi đồng tiền cổ xin keo (Âm Dương); khi được "Nhất Âm Nhất Dương", toàn thể tàu thuyền đồng loạt gióng trống chiêng, hú còi vang trời mừng Thần đã giáng.',
      'Đoàn tàu lượn ba vòng trên biển rồi rước linh Thần hộ tống về bến trong tiếng reo hò của hàng ngàn bà con đứng đợi trên bờ cát.'
    ],
    chantSnippet: {
      title: 'Văn thỉnh Thần Thủy Tộc',
      verse: [
        'Mênh mông sóng bạc non xanh,',
        'Đức Ngài cứu nạn rành rành ơn sâu.',
        'Thuyền câu dạt gió về đâu,',
        'Có Ngài nâng đỡ qua cầu hiểm nguy.'
      ],
      meaning: 'Ca ngợi uy linh và lòng nhân từ cứu vớt thuyền nan gặp nạn giữa biển khơi của Cá Ông.'
    }
  },
  {
    id: 'tuc-yet',
    order: 3,
    timeSlot: '10:00 - 11:30 Trưa ngày Chánh hội',
    title: 'Lễ Túc Yết & Báo Ơn Tiên Bổn',
    shortDesc: 'Nghi thức dâng tuần rượu yết kiến sau khi Thần hồi loan, thanh tẩy và trình báo lễ vật toàn vạn.',
    location: 'Chánh điện Lăng Ông Nam Hải',
    keyActors: ['Bồi bái', 'Đông xướng', 'Tây xướng', 'Học trò lễ (4 - 8 người)'],
    offerings: ['Cỗ xôi gà trống tơ', 'Bánh tét bánh chưng', 'Trà sen hảo hạng', 'Trầu cau cánh phượng'],
    significance: 'Yết kiến chào mừng Thần đã an vị sau chuyến tuần du hải phận, dâng lòng thành kính trước thềm chánh tế.',
    detailedSteps: [
      'Học trò lễ theo nhịp đàn xướng bước đi hình chữ "Nhất" và chữ "Tâm", thực hiện các động tác dâng hương dâng rượu trang trọng.',
      'Chánh tế quỳ trước Án ngọc, dâng sơ hiến (tuần rượu đầu tiên) trong tiếng đệm êm dịu của đàn cò và tiêu sáo.',
      'Kiểm duyệt và chỉnh trang toàn bộ vật phẩm cúng bái sẵn sàng cho đàn tế chánh lúc nửa đêm hoặc rạng sáng.'
    ]
  },
  {
    id: 'chanh-te',
    order: 4,
    timeSlot: '23:30 Đêm chánh hội hoặc Rạng sáng hôm sau',
    title: 'Đại Lễ Chánh Tế (Tế Thần Nam Hải)',
    shortDesc: 'Đỉnh cao của phần Lễ với bài văn tế chữ Nôm bi tráng, dâng đại lễ Tam sinh, cầu quốc thái dân an, phong điều vũ thuận.',
    location: 'Tiền đình và Nội tẩm Lăng Ông',
    keyActors: ['Chánh tế lão thành (người có đạo đức, gia đình song toàn)', 'Bồi tế', 'Ban chấp sự', 'Toàn thể ngư dân trong vạn'],
    offerings: ['Heo toàn sắc (lợn cạo sạch nguyên con)', 'Mâm cỗ sơn hào hải vị chay thanh', 'Nhang trầm đại đỉnh', 'Đèn nến sáp ong'],
    significance: 'Thể hiện niềm tin tuyệt đối vào Đấng bảo trợ sinh mạng trên biển, thắt chặt tình cố kết keo sơn của vạn chài.',
    detailedSteps: [
      'Mở đầu bằng ba hồi chín tiếng chiêng trống lôi đình, thông báo đất trời và đại dương chứng giám.',
      'Chánh tế tiến hành "Nghinh thần", "Sơ hiến lễ", "Á hiến lễ" và "Chung hiến lễ".',
      'Người độc văn tế (chọn người có giọng đọc âm vang, truyền cảm) quỳ đọc bản văn tế bằng chữ Hán-Nôm cổ.',
      'Lời văn tế kể lại nguồn gốc biển khơi, nhắc lại những cơn bão dữ, công ơn Đức Ông cứu vớt tàu thuyền và khẩn cầu năm mới trời yên biển lặng, cá mực ngập khoang thuyền.',
      'Kết thúc bằng nghi thức "Ẩm phước" (uống chén rượu lộc Thần ban) và "Hóa văn tế" (đốt bài văn tế vào lư đồng để dâng Thần).'
    ],
    chantSnippet: {
      title: 'Trích đoạn Văn tế Nam Hải Cự Tộc Thần',
      verse: [
        'Trời Đông Hải mênh mông ba đào cuộn sóng,',
        'Đấng Nam Hải hiển linh tế độ muôn dân.',
        'Khi cuồng phong xé buồm gãy cột,',
        'Nhờ lưng Thần che chắn vượt cơn tai ách.',
        'Nguyện một lòng kính bái, muôn thuở khói hương!'
      ],
      meaning: 'Bài văn tế tạ ơn cứu mạng thiêng liêng, khắc ghi tình nghĩa giữa ngư dân với thần biển.'
    }
  },
  {
    id: 'tong-quai',
    order: 5,
    timeSlot: 'Chiều ngày cuối lễ hội',
    title: 'Lễ Tống Quái & Thả Thuyền Long Châu',
    shortDesc: 'Nghi thức tiễn biệt các vong hồn tử nạn trên biển khơi và xua đuổi tai ương ra khỏi làng chài.',
    location: 'Bờ biển / Cửa biển trước Lăng Ông',
    keyActors: ['Thầy cả / Pháp sư làm lễ', 'Ban trị sự Lăng', 'Bà con ngư dân'],
    offerings: ['Chiếc thuyền Long châu giấy tinh xảo chứa gạo muối', 'Bánh đa', 'Tiền vàng mã', 'Đèn hoa đăng'],
    significance: 'Cầu siêu cho những người xấu số nằm lại nơi đáy biển, tẩy uế tà khí và cầu chúc sự thanh tịnh trường cửu cho bờ bãi.',
    detailedSteps: [
      'Thuyền Long châu được làm bằng khung tre giấy ngũ sắc, bên trong đặt các hình nộm thủy thủ, lương thực gạo muối và vàng mã.',
      'Sau khi đọc văn cầu siêu thí thực bách tánh, thanh niên vạn chài bơi thúng đưa chiếc thuyền Long châu vượt qua lằn sóng bạc thả trôi ra trùng khơi.',
      'Bà con cùng thắp hàng trăm ngọn hoa đăng thả trôi theo con nước triều tạo nên khung cảnh lung linh huyền ảo.'
    ]
  }
];

export const BA_TRAO_ROLES: BaTraoRole[] = [
  {
    id: 'tong-mui',
    name: 'Tổng Mũi (Tổng Tiền)',
    titleCn: '總 前',
    position: 'bow',
    description: 'Người đứng ở đầu thuyền, đóng vai trò hoa tiêu dẫn lối, người lĩnh xướng mở đầu bài ca vượt sóng.',
    costume: 'Mặc áo thụng xanh hoặc đỏ thêu họa tiết sóng biển, đầu đội khăn đóng hoặc mũ quan văn/võ, chân đi hài mũi cong.',
    prop: 'Cặp phách sinh tiền gỗ mun (hoặc quạt lông/thanh gươm lệnh mạ vàng).',
    movements: [
      'Đứng tấn vững chãi ở đầu mũi thuyền, tay vung sinh tiền theo nhịp ba phách bảy.',
      'Mắt nhìn xa xăm quan sát luồng nước và hướng gió, dậm gót nhịp nhàng theo câu hát.',
      'Động tác ra hiệu cho đoàn trạo chuẩn bị vượt sóng cồn nguy hiểm.'
    ],
    signatureVerse: {
      melody: 'Hò Mái Ba / Lĩnh xướng khai trạo',
      lyrics: [
        'Khoan hỡi khoan hò! Anh em trạo phu đâu?',
        'Trông ngọn sóng gầm, gió thổi đông nam!',
        'Tay nắm mái chèo cho thật chắc!',
        'Đưa thuyền ta lướt tới ngọn ba đào!'
      ],
      context: 'Mở màn khi thuyền chuẩn bị xuất bến ra khơi, thúc giục tinh thần đoàn trạo.'
    }
  },
  {
    id: 'tong-khoang',
    name: 'Tổng Khoang (Tổng Tiền/Tổng Hậu chặng giữa)',
    titleCn: '總 艙',
    position: 'mid',
    description: 'Người phụ trách khoang thuyền giữa, tính tình hóm hỉnh, tếu táo, đem lại tiếng cười lạc quan giữa gian lao sóng gió.',
    costume: 'Mặc áo bà ba ngắn màu sắc rực rỡ, quần nẹp ống túm, cổ quấn khăn rằn hoặc dải lụa đỏ.',
    prop: 'Gàu sòng tát nước bằng đồng hoặc gỗ, hồ lô đựng rượu, cần câu cá tre chuốt.',
    movements: [
      'Động tác tát nước vào khoang rồi hắt ra mạn thuyền uốn lượn nhịp nhàng.',
      'Điệu bộ xiêu vẹo ngộ nghĩnh khi say sóng hoặc đùa giỡn cùng các con trạo.',
      'Cầm hồ lô mời rượu Tổng Lái và Trạo phu để lấy lại sức sau cơn bão giông.'
    ],
    signatureVerse: {
      melody: 'Hát Lý Con Cá / Vè Hoạt Kê',
      lyrics: [
        'Nước vào khoang ta tát cho cạn,',
        'Cá vào lưới ta gỡ cho nhanh!',
        'Rượu nếp thơm nghiêng chén chúc lành,',
        'Vợ ở nhà chờ ghe về bến!'
      ],
      context: 'Hát lúc thuyền vừa qua khỏi vùng hiểm nguy, tạo không khí vui tươi giải tỏa căng thẳng.'
    }
  },
  {
    id: 'tong-lai',
    name: 'Tổng Lái (Tổng Hậu)',
    titleCn: '總 舵',
    position: 'stern',
    description: 'Người đứng ở đuôi thuyền giữ tay lái chính, tượng trưng cho linh hồn và sự sống còn của cả con tàu.',
    costume: 'Trang phục trang nghiêm lộng lẫy nhất: áo thụng gấm màu đỏ điều thêu long vân, đầu đội mũ cánh chuồn hoặc khăn hoàng sắc.',
    prop: 'Mái chèo lái dài (chèo tỳ) sơn son thếp vàng, chạm khắc hoa văn rồng uốn lượn.',
    movements: [
      'Hai tay ghì chặt mái chèo lái lớn, dồn trọng tâm cơ thể theo từng nhịp sóng vỗ.',
      'Xoay trở mái chèo theo hướng 45 độ mô phỏng việc bẻ lái tránh đá ngầm.',
      'Quỳ lạy tạ ơn Đức Ngư Ông với nét mặt thành kính, trang nghiêm tột bậc.'
    ],
    signatureVerse: {
      melody: 'Điệu Nam Ai / Tế Nguyện Nam Hải',
      lyrics: [
        'Trông vời biển cả mù khơi,',
        'Đội ơn Đức Ngài tát cạn dòng sầu.',
        'Lái vững tay, buồm no gió lộng,',
        'Đưa đoàn con trở lại quê nhà!'
      ],
      context: 'Điệu bi ai xúc động khi thuyền gặp bão lớn tưởng chừng chìm đắm thì được Cá Ông nâng đỡ thoát nạn.'
    }
  },
  {
    id: 'trao-ta',
    name: 'Hàng Trạo Tả (6 - 8 Tay Chèo Cánh Trái)',
    titleCn: '左 棹 夫',
    position: 'left-oar',
    description: 'Đội hình thanh niên trai tráng bắp thịt rắn rỏi bên mạn trái, đồng bộ động tác chèo thuyền theo tiếng trống lệnh.',
    costume: 'Áo nẹp xanh viền vàng, quần trắng, chít khăn đầu rìu màu vàng nghệ, lưng thắt dải lụa đỏ.',
    prop: 'Mái chèo gỗ sơn son thếp vàng, bản chèo chạm họa tiết vảy cá hoặc rồng chầu.',
    movements: [
      'Chèo bơi: Chèo nhịp nhàng thong thả khi nước êm.',
      'Chèo lướt: Chèo nhanh, dứt khoát rẽ sóng khi tăng tốc.',
      'Chèo hầu: Dựng đứng mái chèo thẳng hàng nghinh đón linh Thần.'
    ],
    signatureVerse: {
      melody: 'Hò Xô / Đồng thanh phụ họa',
      lyrics: [
        '(Xô) Là hò... bả trạo là hò!',
        '(Xô) Lướt sóng cồn ta chèo cho mau!',
        '(Xô) Ơ hò... ớ hò khoan!'
      ],
      context: 'Hát đáp lại lời lĩnh xướng của Tổng Mũi và Tổng Lái trong suốt màn biểu diễn.'
    }
  },
  {
    id: 'trao-huu',
    name: 'Hàng Trạo Hữu (6 - 8 Tay Chèo Cánh Phải)',
    titleCn: '右 棹 夫',
    position: 'right-oar',
    description: 'Đội hình tay chèo bên mạn phải, phối hợp đối xứng tuyệt đối với hàng Trạo Tả tạo nên hình tượng chiếc thuyền rồng sống động.',
    costume: 'Áo nẹp đỏ viền xanh, quần trắng, chít khăn đầu rìu vàng nghệ đồng bộ.',
    prop: 'Mái chèo gỗ sơn son thếp vàng chạm hoa văn mây sóng thủy ba.',
    movements: [
      'Đổi vai chèo nhịp nhàng không lệch một phân nhịp.',
      'Quỳ một gối, ngả người ra sau 45 độ khi thuyền gặp sóng ngọn.',
      'Nâng dầm chào quan khách và cúi đầu trước bệ thờ Thần.'
    ],
    signatureVerse: {
      melody: 'Hò Xô / Đồng thanh hiệp xướng',
      lyrics: [
        '(Xô) Ơi a... thuyền ta bon bon!',
        '(Xô) Đầy khoang cá bạc, thắm tình vạn chài!',
        '(Xô) Ơ hò... ơ hò khoan!'
      ],
      context: 'Điệu hát lúc cập bến bình yên, mừng thành quả lao động của chuyến đi biển.'
    }
  }
];

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'van-thuy-tu',
    province: 'Bình Thuận',
    name: 'Vạn Thủy Tú (Phan Thiết)',
    address: 'Đường Ngư Ông, Phường Đức Thắng, TP. Phan Thiết, Bình Thuận',
    establishedCentury: 'Khởi dựng năm Nhâm Ngọ 1762',
    festivalLunarDate: 'Ngày 20/6 âm lịch (Chính mùa) & 20/4 âm lịch (Cầu ngư đầu năm)',
    highlights: [
      'Lưu giữ bộ xương Cá Ông lớn nhất Việt Nam và Đông Nam Á (dài 22 mét, nặng 65 tấn)',
      'Nơi lưu giữ hơn 100 bộ cốt cá Ông được tôn xưng qua hơn 260 năm',
      'Được công nhận Di tích Lịch sử - Văn hóa cấp Quốc gia năm 1996',
      '24 đạo sắc phong của các đời vua triều Nguyễn ban tặng'
    ],
    whaleRelicDescription: 'Bộ cốt Ông Chuông dài 22m được phục dựng hoàn chỉnh trong nhà trưng bày trang trọng, cùng khu mộ Táng cá Ông rộng hàng trăm mét vuông ngay sau khuôn viên lăng.',
    sacredItems: [
      'Chuông đồng đúc năm Nhâm Thân (1872) thời vua Tự Đức',
      '24 đạo sắc phong từ thời Thiệu Trị, Tự Đức, Đồng Khánh, Khải Định',
      'Chiếc kiệu bát cống rước sắc tinh xảo sơn son thếp vàng'
    ],
    historicalNotes: 'Vạn Thủy Tú được xem là trung tâm tín ngưỡng biển lâu đời và quy mô bậc nhất toàn duyên hải miền Trung, nơi quy tụ đầy đủ các phong tục điển hình của ngư dân Nam Trung Bộ.',
    coordinates: { lat: 10.9255, lng: 108.0988 }
  },
  {
    id: 'lang-ong-tho-quang',
    province: 'Đà Nẵng',
    name: 'Lăng Ông Thọ Quang & Vạn Mân Thái',
    address: 'Bán đảo Sơn Trà, Phường Thọ Quang, Quận Sơn Trà, TP. Đà Nẵng',
    establishedCentury: 'Thế kỷ XIX (thời Minh Mạng)',
    festivalLunarDate: 'Ngày 14 - 16 tháng Giêng âm lịch',
    highlights: [
      'Di sản Văn hóa Phi vật thể Quốc gia (công nhận năm 2016)',
      'Mở màn cho mùa biển mới của ngư dân vịnh Đà Nẵng và Hoàng Sa',
      'Hội thi lắc thúng chai và đan lưới truyền thống đặc sắc trên bãi biển Mỹ Khê - Mân Thái'
    ],
    whaleRelicDescription: 'Lăng lưu giữ hàng chục thạp sành chứa ngọc cốt Đức Ngư Ông được cải táng tôn nghiêm qua nhiều thế hệ ngư dân Sơn Trà.',
    sacredItems: [
      'Sắc phong của vua Tự Đức ban tặng năm 1852',
      'Bức hoành phi "Hải Nhược Trừng Thanh" (Biển lặng trời trong)',
      'Mô hình thuyền câu truyền thống vượt sóng Hoàng Sa'
    ],
    historicalNotes: 'Ngư dân Thọ Quang từ xưa nổi tiếng kiên cường, nơi đây lưu truyền nhiều câu chuyện cảm động về Cá Ông dìu thuyền câu qua bão dữ.',
    coordinates: { lat: 16.1012, lng: 108.2435 }
  },
  {
    id: 'lang-tan-ly-son',
    province: 'Quảng Ngãi',
    name: 'Lăng Tân (Đảo Lý Sơn)',
    address: 'Thôn Đông, Xã An Hải, Huyện đảo Lý Sơn, Quảng Ngãi',
    establishedCentury: 'Khởi dựng đầu thế kỷ XIX',
    festivalLunarDate: 'Mùng 3 đến mùng 7 Tết Nguyên Đán & Lễ hội tháng 4 âm lịch',
    highlights: [
      'Lưu giữ 2 bộ xương Cá Voi lưng xám dài 18m - 22m được phục chế nguyên vẹn',
      'Gắn liền mật thiết với Hải đội Hoàng Sa kiêm quản Trường Sa thời triều Nguyễn',
      'Đại lễ đua thuyền Tứ Linh (Long, Lân, Quy, Phụng) quy mô bậc nhất miền Trung'
    ],
    whaleRelicDescription: 'Hai bộ ngọc cốt được tôn vinh là Đồng Đình Đại Vương và Đức Ngư Nhị Vị Tôn Thần, kích thước khổng lồ đặt trong gian điện Thượng đình.',
    sacredItems: [
      'Bản sắc phong phong tặng tước vị tột đỉnh của vua Khải Định',
      'Hệ thống thuyền đua Tứ Linh chạm khắc thủ công nguyên khối thân cây rừng',
      'Các bài văn tế Hùng binh Hoàng Sa kiêm tế Thần biển'
    ],
    historicalNotes: 'Lý Sơn là tiền đồn biển đảo thiêng liêng, tín ngưỡng thờ Cá Ông tại Lăng Tân đan quyện cùng tinh thần bảo vệ chủ quyền biển đảo ngàn đời.',
    coordinates: { lat: 15.3789, lng: 109.1352 }
  },
  {
    id: 'lang-ong-dong-tac',
    province: 'Phú Yên',
    name: 'Lăng Nam Hải Đông Tác (Tuy Hòa)',
    address: 'Phường Phú Đông, TP. Tuy Hòa, Phú Yên (cạnh cửa biển Đà Diễn)',
    establishedCentury: 'Thế kỷ XVIII',
    festivalLunarDate: 'Tháng 3 và tháng 6 âm lịch hàng năm',
    highlights: [
      'Được công nhận Di sản Phi vật thể Quốc gia về Lễ hội Cầu ngư Phú Yên năm 2018',
      'Đội hát Bả Trạo nức tiếng với những làn điệu cổ truyền gìn giữ nguyên vẹn',
      'Tập tục chôn táng Ông Lụy nghiêm cẩn theo chuẩn mực cổ truyền xứ Nẫu'
    ],
    whaleRelicDescription: 'Hơn 40 quách gỗ ngọc cốt Cá Ông lưu giữ tại Hậu tẩm, trong đó có cốt ngài dài trên 15m trôi dạt vào bãi biển Đà Diễn thế kỷ trước.',
    sacredItems: [
      'Chiếc trống sấm có đường kính 1.2m làm từ gỗ mít cổ thụ gióng gọi hồn biển',
      'Bộ dầm chèo thếp vàng cổ truyền qua 4 đời nghệ nhân truyền lại'
    ],
    historicalNotes: 'Phú Yên sở hữu hàng chục vạn chài lớn nhỏ; Đông Tác là biểu tượng của tinh thần nghĩa hiệp và văn hóa dân gian miền hạ lưu sông Ba.',
    coordinates: { lat: 13.0768, lng: 109.3245 }
  },
  {
    id: 'lang-ong-vinh-truong',
    province: 'Khánh Hòa',
    name: 'Lăng Nam Hải Vĩnh Trường (Nha Trang)',
    address: 'Phường Vĩnh Trường, TP. Nha Trang, Khánh Hòa',
    establishedCentury: 'Thế kỷ XIX',
    festivalLunarDate: 'Ngày 10 - 12 tháng 2 âm lịch',
    highlights: [
      'Lễ hội Cầu ngư Khánh Hòa - Di sản Văn hóa Phi vật thể Quốc gia (2012)',
      'Nghi thức Nghinh Ông trên biển quy tụ hàng trăm tàu cá vịnh Nha Trang',
      'Diễn xướng Hát Bả Trạo kết hợp múa cờ và múa bông đặc sắc'
    ],
    whaleRelicDescription: 'Gian Thượng cốt lưu giữ nhiều ngọc cốt cổ bọc vải nhiễu điều đỏ, đặt trên long sập chạm lộng tinh xảo.',
    sacredItems: [
      'Sắc phong của vua Tự Đức năm thứ 33 (1880)',
      'Bộ chiêng đồng cổ ngân vang tiếng sóng âm bến cảng Cửa Bé'
    ],
    historicalNotes: 'Khánh Hòa là vùng đất trầm hương biển yến, văn hóa thờ Ông ở đây dung hợp văn hóa người Việt với dấu ấn tín ngưỡng Pô Riyak (thần sóng biển Chăm).',
    coordinates: { lat: 12.2154, lng: 109.2018 }
  },
  {
    id: 'van-an-thanh',
    province: 'Bình Thuận',
    name: 'Vạn An Thạnh (Đảo Phú Quý)',
    address: 'Xã Tam Thanh, Huyện đảo Phú Quý, Bình Thuận',
    establishedCentury: 'Năm Tân Hợi 1781',
    festivalLunarDate: 'Ngày 18 - 20 tháng 4 âm lịch',
    highlights: [
      'Lưu giữ bộ cốt Cá Voi dài gần 20m cùng gần 100 bộ cốt hóa thạch thiêng liêng',
      'Di tích Lịch sử cấp Quốc gia trên hòn đảo tiền tiêu giữa biển Đông',
      'Nghi lễ nghinh thần trên đảo xa với sự tham gia của 100% cư dân'
    ],
    whaleRelicDescription: 'Bộ xương Cá Voi lưng gù được bảo tồn trong viện lưu trữ ngọc cốt của Vạn, xương đầu nặng hàng tấn.',
    sacredItems: [
      'Hơn 15 sắc phong triều Nguyễn còn nguyên vẹn ấn ngọc',
      'Trống cái da trâu rừng được mang từ đất liền ra đảo hơn 200 năm trước'
    ],
    historicalNotes: 'Phú Quý được bao bọc bốn bề biển cả; Vạn An Thạnh chính là điểm tựa tâm linh lớn nhất cho mọi thế hệ người dân trên đảo.',
    coordinates: { lat: 10.5123, lng: 108.9456 }
  },
  {
    id: 'lang-van-go-boi',
    province: 'Bình Định',
    name: 'Lăng Nam Hải Gò Bồi & Quy Nhơn',
    address: 'Xã Phước Hòa, Huyện Tuy Phước & Bến Hàm Tử, TP. Quy Nhơn, Bình Định',
    establishedCentury: 'Thế kỷ XVIII (thời Tây Sơn - Nguyễn)',
    festivalLunarDate: 'Ngày rằm tháng Giêng & Ngày 26 tháng 3 âm lịch',
    highlights: [
      'Hát Bả Trạo Bình Định mang đậm âm hưởng Tuồng Đào Tấn và võ thuật Tây Sơn',
      'Động tác chèo dầm mang thế tấn vững chãi của quyền cước Bình Định',
      'Hội thi bơi dầm trên đầm Thị Nại hào hùng'
    ],
    whaleRelicDescription: 'Bàn thờ trung tâm là chiếc khám thờ gỗ khảm xà cừ cổ chứa hòm ngọc cốt ngàn năm.',
    sacredItems: [
      'Sắc phong niên hiệu Cảnh Thịnh (nhà Tây Sơn) và niên hiệu Gia Long',
      'Bộ dầm chèo bằng gỗ mun đen chạm hoa văn mắt phượng'
    ],
    historicalNotes: 'Gò Bồi từng là thương cảng sầm uất bậc nhất Đàng Trong; Lễ Cầu ngư nơi đây gắn liền với hồn thiêng sông nước đầm Thị Nại.',
    coordinates: { lat: 13.8567, lng: 109.2241 }
  },
  {
    id: 'lang-ong-dong-hai',
    province: 'Ninh Thuận',
    name: 'Lăng Ông Đông Hải (Phan Rang)',
    address: 'Phường Đông Hải, TP. Phan Rang - Tháp Chàm, Ninh Thuận',
    establishedCentury: 'Cuối thế kỷ XIX',
    festivalLunarDate: 'Tháng 4 và tháng 7 âm lịch',
    highlights: [
      'Giao thoa phong phú giữa tín ngưỡng ngư dân người Kinh và văn hóa biển người Chăm vùng Panduranga',
      'Nghi thức cúng tạ ơn Hải thần và Bà Cậu cai quản sông biển',
      'Đội nhạc ngũ âm phối hợp trống Paranưng độc đáo'
    ],
    whaleRelicDescription: 'Hệ thống ngọc cốt được tôn kính trong các chum sành tráng men da lươn cổ xưa.',
    sacredItems: [
      'Bản hương ước vạn chài Đông Hải ghi lại quy chế đánh bắt tương trợ trên biển',
      'Bàn thờ Bà Thủy Cung và Tiền vạn chủ'
    ],
    historicalNotes: 'Ninh Thuận nổi tiếng với nắng và gió; lễ hội Cầu ngư Đông Hải là dịp ngư dân tụ hội thắt chặt nghĩa tình vạn bè vượt qua gió bão mùa nam.',
    coordinates: { lat: 11.5543, lng: 109.0211 }
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'ong-luy',
    term: 'Ông Lụy',
    phonetic: 'ôñ lui-jˀ',
    category: 'nghi-le',
    definition: 'Hiện tượng cá Voi (cá Ông) bị thương tích, già yếu hoặc kiệt sức dạt vào bờ biển làng chài và qua đời.',
    culturalContext: 'Ngư dân Nam Trung Bộ không bao giờ dùng từ "chết" đối với cá Voi mà gọi trang trọng là "Ông lụy" hoặc "Ông quy thiên". Làng chài xem đây là điềm lành Thần chọn đất làng mình để gởi thân xác, mang lại phúc lộc cho cả vạn.',
    exampleSentence: 'Sáng nay nghe tiếng chuông Lăng gióng liên hồi, cả vạn hay tin có Ông lụy dạt vào bãi rạng phía Nam.'
  },
  {
    id: 'truong-nam-ong',
    term: 'Trưởng Nam (Người đội tang Ông)',
    category: 'chuc-sac',
    definition: 'Người ngư dân đầu tiên phát hiện xác cá Ông dạt vào bờ biển.',
    culturalContext: 'Theo tục lệ, người này được vạn chài phong là "Trưởng nam", có vinh dự và nghĩa vụ chịu tang phục (áo gai, mũ rơm, chống gậy) đúng 3 năm như con đẻ chịu tang cha mẹ ruột. Trong suốt thời gian này, gia đình người đó được vạn chài tương trợ kinh phí và coi là người có đại phước.',
    exampleSentence: 'Bác Ba phát hiện Ông lụy đầu tiên nên được chọn làm Trưởng nam, quỳ tế trước linh sàng suốt lễ táng.'
  },
  {
    id: 'ngoc-cot',
    term: 'Ngọc Cốt (Ngọc Xương)',
    category: 'kien-truc',
    definition: 'Bộ xương của cá Ông sau khi đã được chôn cất cát trắng đủ 3 năm, làm lễ cải táng rồi thỉnh về thờ trong Lăng.',
    culturalContext: 'Xương cá voi được rửa sạch bằng rượu trắng và nước thơm ngâm quế, xếp thứ tự vào thạp sành hoặc tráp gỗ sơn son thếp vàng, đặt trang trọng ở Hậu cung Lăng Ông, gọi là Ngọc cốt.',
    exampleSentence: 'Hàng trăm thạp ngọc cốt được xếp ngay ngắn trong Thượng đình của Lăng Nam Hải.'
  },
  {
    id: 'ba-trao',
    term: 'Bả Trạo (Chèo Bả Trạo)',
    phonetic: 'ɓaː˧˩ ʈaːw˧˨',
    category: 'ba-trao',
    definition: 'Diễn xướng dân gian nghi lễ kết hợp giữa hát, múa và nhạc lễ để mô phỏng một chuyến vượt biển của con thuyền rồng.',
    culturalContext: '"Bả" có nghĩa là nắm giữ, "Trạo" là mái chèo. Hát bả trạo là lời cầu nguyện tạ ơn Đức Ông, đồng thời ca ngợi tinh thần đoàn kết, kiên cường của người đi biển trước sóng gió đại dương.',
    exampleSentence: 'Đội bả trạo gồm Tổng Mũi, Tổng Khoang, Tổng Lái cùng 14 trạo phu vừa múa dầm vừa xướng hò mái ba.'
  },
  {
    id: 'van-chai',
    term: 'Vạn Chài (Vạn ngư)',
    category: 'ngu-nghiep',
    definition: 'Tổ chức cộng đồng nghề cá truyền thống của ngư dân ven biển miền Trung, có tính tự quản cao.',
    culturalContext: 'Mỗi vạn chài có người đứng đầu gọi là Vạn trưởng, có lệ vạn (hương ước riêng), có lăng thờ Thần Nam Hải và quỹ cứu trợ cho các gia đình ngư dân gặp rủi ro trên biển.',
    exampleSentence: 'Lệ vạn quy định rõ: gặp tàu bạn gặp nạn ngoài khơi phải lập tức cứu người bỏ lưới.'
  },
  {
    id: 'le-tong-quai',
    term: 'Lễ Tống Quái (Tống Khống)',
    category: 'nghi-le',
    definition: 'Nghi lễ tống tiễn tai ương, dịch bệnh và cô hồn tử nạn trên biển ra khỏi bờ cõi làng chài.',
    culturalContext: 'Thực hiện vào cuối ngày hội Cầu ngư bằng cách thả một chiếc thuyền Long châu chứa lương thực, tiền vàng mã ra khơi xa.',
    exampleSentence: 'Thuyền Long châu chở đi bao hiểm nguy, để lại bờ bãi bình an, tôm cá đầy khoang.'
  },
  {
    id: 'nam-hai-cu-toc',
    term: 'Nam Hải Cự Tộc Ngọc Lân Tôn Thần',
    category: 'chuc-sac',
    definition: 'Tước phong cao quý nhất do các vua triều Nguyễn sắc phong cho loài cá Voi.',
    culturalContext: 'Xuất phát từ tích xưa chúa Nguyễn Ánh (sau là vua Gia Long) khi bôn tẩu ngoài vịnh Xiêm La gặp giông bão lớn, được đôi cá Voi áp mạn hộ tống thuyền vào bờ an toàn. Sau khi lên ngôi, vua sắc phong danh hiệu Thượng Đẳng Thần.',
    exampleSentence: 'Đạo sắc phong thời Tự Đức tôn vinh ngài là Từ tế Trang nghiêm Nam Hải Cự Tộc Tôn Thần.'
  },
  {
    id: 'an-ngoc',
    term: 'Án Ngọc (Hương Án Nam Hải)',
    category: 'kien-truc',
    definition: 'Bàn thờ trung tâm nguy nga bằng gỗ sơn son thếp vàng đặt ở chánh điện Lăng Ông.',
    culturalContext: 'Nơi đặt bài vị, lư trầm đồng, bài trí hoa quả và các hòm ngọc cốt linh thiêng nhất.',
    exampleSentence: 'Khói trầm thơm ngát tỏa quanh Án ngọc trong suốt những ngày đêm chánh hội.'
  },
  {
    id: 'dam-trao',
    term: 'Dầm Trạo (Mái chèo bả trạo)',
    category: 'ba-trao',
    definition: 'Đạo cụ thiêng liêng bằng gỗ nhẹ được đẽo gọt công phu, sơn màu đỏ son thếp hoa văn rồng vàng.',
    culturalContext: 'Mỗi con trạo giữ một dầm chèo dài khoảng 1.2m - 1.5m, đầu dầm chạm mắt cá hoặc vảy rồng, dùng để thực hiện các vũ đạo chèo bơi, chèo lướt, chèo hầu.',
    exampleSentence: 'Các tay chèo nâng dầm trạo vút lên cao, đồng loạt hô vang lời xô hùng tráng.'
  },
  {
    id: 'te-tam-sinh',
    term: 'Tế Tam Sinh',
    category: 'nghi-le',
    definition: 'Lễ vật hiến tế gồm ba loài vật nuôi: Bò (hoặc Trâu), Dê và Heo (lợn).',
    culturalContext: 'Trong các lễ Cầu ngư ở vạn chài lớn, thông thường dùng heo toàn sắc (lợn cạo sạch lông, để nguyên con không chặt khúc) dâng lên làm đại lễ trước bàn thờ thần biển.',
    exampleSentence: 'Mâm tế tam sinh được chuẩn bị trang trọng, đặt chính giữa tiền đình trước giờ chánh tế.'
  },
  {
    id: 'cuu-hoan-linh-phu',
    term: 'Cửu Hoạn Linh Phù',
    category: 'nghi-le',
    definition: 'Lá bùa bình an linh thiêng do ban quản trị Lăng Ông cấp cho các chủ thuyền cá sau lễ tế.',
    culturalContext: 'Chủ thuyền dán lá phù này ở mũi ghe hoặc trước bàn thờ trong cabin tàu để xua đuổi tà khí và cầu nguyện may mắn khi ra khơi đánh bắt xa bờ.',
    exampleSentence: 'Mỗi ngư dân trước khi mở biển đều đến Lăng xin một lá linh phù gắn lên mũi tàu.'
  },
  {
    id: 'tong-lai',
    term: 'Tổng Lái',
    category: 'ba-trao',
    definition: 'Nghệ nhân cao niên đóng vai thuyền trưởng cầm lái ở đuôi thuyền trong diễn xướng Bả Trạo.',
    culturalContext: 'Yêu cầu phải có giọng hát trầm ấm, truyền cảm, thông hiểu toàn bộ bài bản cổ và giữ nhịp vững vàng cho toàn đoàn.',
    exampleSentence: 'Cụ Nghệ nhân Ưu tú thể hiện vai Tổng Lái làm người xem rưng rưng xúc động khi hát khúc Nam Ai khóc Ông.'
  }
];

export const IMPERIAL_EDICTS: ImperialEdict[] = [
  {
    id: 'sac-gia-long',
    reign: 'Triều Vua Gia Long',
    year: 'Gia Long ngũ niên (1806)',
    conferredTitle: 'Nam Hải Cự Tộc Ngọc Lân Chi Thần',
    recipient: 'Vạn Thủy Tú (Phan Thiết, Bình Thuận)',
    hannoExcerpt: '敕 南 海 巨 族 玉 鱗 之 神, 護 國 濟 舟, 著 靈 彰 應, 特 准 依 舊 奉 事...',
    translation: 'Sắc phong cho Nam Hải Cự Tộc Ngọc Lân chi thần, có công hộ quốc cứu thuyền, linh ứng rõ rệt, đặc chuẩn cho làng xã theo lệ xưa phụng thờ, để ghi nhớ ân đức bảo hộ muôn dân.',
    significance: 'Sắc phong đánh dấu sự công nhận chính thức của nhà nước phong kiến đối với tín ngưỡng thờ Cá Ông của ngư dân, nâng vị thế của Thần từ dân gian lên hàng Quốc tế.'
  },
  {
    id: 'sac-tu-duc',
    reign: 'Triều Vua Tự Đức',
    year: 'Tự Đức tam thập tam niên (1880)',
    conferredTitle: 'Từ Tế Trang Nghiêm Dực Bảo Trung Hưng Tôn Thần',
    recipient: 'Lăng Nam Hải Vĩnh Trường (Nha Trang, Khánh Hòa)',
    hannoExcerpt: '敕 念 海 疆 遼 濶, 神 靈 顯 赫, 救 難 扶 危, 晉 封 慈 濟 莊 嚴 翼 保 中 興 尊 神...',
    translation: 'Sắc ban vì nghĩ biển khơi bờ cõi xa xôi, thần linh hiển hách, cứu nguy phò nạn giữa sóng cồn, tấn phong thêm mỹ tự Từ Tế Trang Nghiêm Dực Bảo Trung Hưng, cho dân làng e kính tôn thờ.',
    significance: 'Mỹ tự "Từ Tế" (lòng nhân từ cứu vớt) khẳng định bản chất độ lượng, che chở tính mạng ngư dân của Cá Ông trong tâm thức người Việt.'
  },
  {
    id: 'sac-khai-dinh',
    reign: 'Triều Vua Khải Định',
    year: 'Khải Định cửu niên (1924)',
    conferredTitle: 'Đại Càn Quốc Gia Nam Hải Cự Tộc Thượng Đẳng Tôn Thần',
    recipient: 'Lăng Tân (Huyện đảo Lý Sơn, Quảng Ngãi)',
    hannoExcerpt: '敕 念 皇 沙 廣 遠, 護 國 庇 民, 晉 贈 上 等 神, 永 垂 祀 典...',
    translation: 'Sắc ban ghi nhận công đức bảo hộ dân chài nơi hải cương Hoàng Sa muôn trùng, tấn tặng tước vị Thượng Đẳng Thần, mãi mãi lưu truyền trong điển lễ quốc gia.',
    significance: 'Khẳng định mối liên kết chặt chẽ giữa tín ngưỡng thờ Cá Ông với chủ quyền biển đảo thiêng liêng tại quần đảo Hoàng Sa của nước Việt.'
  }
];

export const INITIAL_COMMUNITY_MEMORIES: CommunityNote[] = [
  {
    id: 'mem-1',
    authorName: 'Cụ Nguyễn Văn Mười (82 tuổi)',
    villageName: 'Vạn chài Đông Tác',
    province: 'Phú Yên',
    role: 'Nghệ nhân Dân gian hát Bả Trạo',
    yearRecorded: 'Ghi chép điền dã 2024',
    storyTitle: 'Tiếng dầm trạo và bài học giữ mình của người đi biển',
    content: 'Tôi theo cha học hát bả trạo từ năm 14 tuổi. Bả trạo không phải diễn kịch cho vui, mà là lời tạ ơn rút ruột rút gan của người đi biển. Mỗi lần nâng dầm chèo gỗ lên, mắt nhìn vào án thờ Đức Ông, tiếng hò xô cất lên là cả làng rùng mình xúc động. Người làng biển chúng tôi dặn con cháu: ra khơi không bao giờ được tham lam, gặp bạn thuyền gặp nạn phải dốc lòng cứu giúp, sống có đức thì Đức Ông mới chở che.',
    tag: 'Diễn xướng Bả Trạo'
  },
  {
    id: 'mem-2',
    authorName: 'Thuyền trưởng Trần Văn Dũng',
    villageName: 'Làng chài Thọ Quang',
    province: 'Đà Nẵng',
    role: 'Chủ tàu câu cá ngừ đại dương',
    yearRecorded: 'Kỷ niệm mùa biển 2023',
    storyTitle: 'Đêm bão cấp 11 và bóng ngài áp mạn tàu',
    content: 'Năm 2006, tàu tôi bị hỏng máy ngay rìa mắt bão Chanchu ngoài khơi xa. Sóng lớn như quả núi bổ chụp xuống ca-bin, anh em đã viết giấy tên tuổi nhét vào túi áo chờ điều tồi tệ nhất. Đúng nửa đêm, bỗng thấy một lưng cá đen bóng khổng lồ dài gấp đôi thân tàu nổi sát mạn trái, chắn trọn luồng sóng dữ cho tàu tôi nương vào. Suốt 8 tiếng đồng hồ trôi dạt, ngài luôn áp sát mạn cho đến khi bão tan sóng êm. Trở về bờ an toàn, cả vạn làm lễ tạ ơn linh Thần suốt ba ngày đêm.',
    tag: 'Chuyện Ông cứu nạn'
  },
  {
    id: 'mem-3',
    authorName: 'Bác Huỳnh Thị Lệ',
    villageName: 'Phường Vĩnh Trường',
    province: 'Khánh Hòa',
    role: 'Hội trưởng Hội Phụ nữ Vạn chài',
    yearRecorded: 'Khảo tả lễ hội 2025',
    storyTitle: 'Bàn tay phụ nữ làng chài trong ngày mở hội Cầu ngư',
    content: 'Đàn ông con trai thì lo rước kiệu, nổ máy thuyền hoa ngoài biển, còn phụ nữ chúng tôi chuẩn bị hàng trăm đòn bánh tét, mâm ngũ quả, dọn dẹp khuôn viên Lăng Ông từ mấy ngày trước. Đêm chánh tế, cả làng thức trắng, tiếng trống sấm và lời văn tế vang vọng qua từng mái nhà làm lòng người ấm áp vô cùng. Hội Cầu ngư gắn kết cả làng chặt chẽ như một gia đình.',
    tag: 'Đời sống làng chài'
  }
];

export const MELODIES_DATA: MelodyItem[] = [
  {
    id: 'ho-mai-ba',
    name: 'Hò Mái Ba (Lĩnh Xướng Khai Trạo)',
    titleCn: '開 棹 領 倡',
    role: 'Tổng Mũi (Tổng Tiền)',
    roleCategory: 'tong-mui',
    mood: 'hung-trang',
    moodLabel: 'Hùng tráng & Chỉ huy',
    region: 'Toàn vùng Nam Trung Bộ (Đà Nẵng, Quảng Nam, Bình Định, Phú Yên)',
    regionCategory: 'toan-vung',
    description: 'Làn điệu mở đầu cho toàn bộ màn diễn xướng Bả Trạo. Tổng Mũi đứng nơi đầu mũi thuyền cất giọng lĩnh xướng dõng dạc, thúc giục đoàn trạo phu nắm chắc mái chèo chuẩn bị rẽ sóng ra khơi.',
    musicalStructure: {
      scale: 'Ngũ cung Bắc (Hò - Xự - Xang - Xê - Cống), âm vực cao, vang xa',
      tempo: 'Nhịp ba phách bảy, nhịp điệu dứt khoát theo tiếng phách sinh tiền',
      instruments: ['Phách sinh tiền gỗ mun', 'Trống lệnh thúc quân', 'Thanh la cổ'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Tổng Mũi (Xướng)',
          text: [
            'Khoan hỡi khoan hò! Anh em trạo phu đâu?',
            'Nghe lệnh hoa tiêu ta cùng nhau hướng biển!',
            'Trông ngọn gió đông nam thổi lộng,',
            'Sóng bạc đầu cuộn trào trước mũi thuyền nan!'
          ]
        },
        {
          speaker: 'Trạo phu (Đồng thanh xô)',
          text: [
            '(Xô) Dạ có chúng tôi!',
            '(Xô) Dầm chèo sẵn sàng, dạ vâng theo lệnh!',
            '(Xô) Là hò... bả trạo là hò!'
          ]
        },
        {
          speaker: 'Tổng Mũi (Xướng tiếp)',
          text: [
            'Tay ghì dầm chèo cho thật chắc,',
            'Chân dậm nhịp nhàng theo tiếng thanh la.',
            'Lướt tới ba đào ta cùng vượt sóng,',
            'Đưa thuyền rồng đến bến bình yên!'
          ]
        }
      ],
      explanation: 'Thể hiện khí phách kiên cường của người đi biển trước đại dương, khẳng định vai trò hoa tiêu dẫn đường không nao núng trước bão tố.'
    },
    choreography: [
      'Tổng Mũi đứng thế tấn trung bình ở mũi thuyền, ngực ưỡn về phía trước.',
      'Tay phải vung sinh tiền gỗ theo nhịp ba phách bảy, tay trái bắt quyết chỉ phương vị.',
      'Mắt nhìn rực sáng hướng về biển khơi, hai chân dậm gót đồng bộ theo tiếng trống lệnh.'
    ],
    costumeAndProps: 'Áo thụng lam gấm dệt hoa văn thủy ba, mũ quan văn thêu chỉ kim tuyến, cặp phách sinh tiền gỗ mun gắn tiền đồng cổ.',
    culturalContext: 'Mỗi khi câu Hò Mái Ba cất lên, người dân làng chài như được tiếp thêm hào khí sông nước, gợi nhớ lại những đoàn thuyền câu vượt bão ngàn đời.',
    audioPreset: 'sinh-tien'
  },
  {
    id: 'hat-nam-ai',
    name: 'Hát Nam Ai (Khúc Khóc Ông & Tế Nguyện)',
    titleCn: '哭 翁 哀 怨',
    role: 'Tổng Lái (Tổng Hậu) & Ban Vạn',
    roleCategory: 'tong-lai',
    mood: 'bi-ai',
    moodLabel: 'Bi ai & Linh thiêng',
    region: 'Phú Yên, Khánh Hòa, Bình Thuận',
    regionCategory: 'phu-yen-khanh-hoa',
    description: 'Khúc ca bi tráng và xúc động tột bậc trong diễn xướng Bả Trạo, hát khi thuyền nan gặp bão tố hiểm nghèo hoặc khi tái hiện tích cá Ông gởi xác nơi bãi rạng.',
    musicalStructure: {
      scale: 'Điệu Oán Nam Trung Bộ (hơi Ai), nốt Xang và nốt Oan rung rẩy da diết',
      tempo: 'Nhịp tự do chậm rãi, ngắt nghỉ nghẹn ngào theo hơi thở',
      instruments: ['Đàn nhị (đàn cò)', 'Kèn bóp', 'Trống cơm', 'Mõ tre'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Tổng Lái (Than khóc)',
          text: [
            'Trời biển mịt mù... giông gió bủa vây,',
            'Thuyền trôi trôi dạt... biết về nơi nao?',
            'Bỗng thấy ngài nổi... mạn thuyền áp sát,',
            'Chắn ngọn sóng cồn... cứu mạng đoàn con!'
          ]
        },
        {
          speaker: 'Toàn đoàn Trạo (Xô khóc)',
          text: [
            '(Xô) Ôi ôi ân đức... ngàn thu tạc dạ!',
            '(Xô) Đức Ngài lụy cát... khói hương nghẹn ngào!',
            '(Xô) Ớ hỡi Ông ơi... thương tiếc khôn cùng!'
          ]
        },
        {
          speaker: 'Tổng Lái (Nguyện)',
          text: [
            'Nguyện trước Án ngọc... ngàn năm hương khói,',
            'Giữ trọn lòng thành... đáp nghĩa đại dương!'
          ]
        }
      ],
      explanation: 'Khắc họa tình cảm phụ tử thiêng liêng giữa ngư dân và Cá Ông; nước mắt người hát và người xem cùng rơi vì lòng biết ơn vị thần xả thân cứu người.'
    },
    choreography: [
      'Tổng Lái hai tay ghì chặt mái chèo tỳ, quỳ một gối xuống sàn thuyền, đầu cúi bái vọng.',
      'Các trạo phu hai hàng úp mặt mái chèo sơn son xuống ngang gối, động tác chèo chậm như chèo đưa tang.',
      'Cả đoàn nghiêng người sang trái rồi sang phải theo nhịp sóng vỗ đau thương.'
    ],
    costumeAndProps: 'Tổng Lái mặc áo thụng đỏ điều thêu rồng, chít khăn hoàng sắc, cầm dầm chèo tỳ dài 1.8m sơn son chạm rồng vàng.',
    culturalContext: 'Đây là linh hồn của hát bả trạo. Các bô lão cho biết người đóng vai Tổng Lái phải là nghệ nhân dày dạn, có giọng ca vừa uy nghi vừa nghẹn ngào xúc động.',
    audioPreset: 'trong-lenh'
  },
  {
    id: 'hat-nam-khach',
    name: 'Hát Nam Khách (Vượt Ba Đào & Thắng Sóng)',
    titleCn: '波 濤 戰 勝',
    role: 'Tổng Lái & Toàn Đoàn Trạo',
    roleCategory: 'tong-lai',
    mood: 'hung-trang',
    moodLabel: 'Hào hùng & Quyết liệt',
    region: 'Bình Định, Quảng Ngãi, Đà Nẵng',
    regionCategory: 'quang-ngai-binh-dinh',
    description: 'Khúc ca chuyển nhịp sau cơn bão tố. Sóng gió tan biến, trời quang mây tạnh, đoàn thuyền rồng tăng tốc chèo lướt khải hoàn về bến quê hương.',
    musicalStructure: {
      scale: 'Điệu Khách Tuồng cổ Đàng Trong, nhịp đi dồn dập, phách nẩy khỏe khoắn',
      tempo: 'Nhịp đôi nhanh, tiếng trống chiến giục giã liên hồi',
      instruments: ['Trống chiến', 'Thanh la', 'Chiêng đồng ngân', 'Dầm chèo gõ mạn thuyền'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Tổng Lái (Hô lớn)',
          text: [
            'Gió đã thuận buồm! Sóng đã êm trôi!',
            'Anh em trạo phu vung dầm chèo lướt!',
            'Nhìn đằng xa bãi cát quê nhà,',
            'Cờ hoa rực rỡ đón đoàn ghe câu!'
          ]
        },
        {
          speaker: 'Trạo phu (Hò xô rộn rã)',
          text: [
            '(Xô) Lướt tới... ta chèo cho mau!',
            '(Xô) Tay dầm rẽ nước... thuyền bon bon vào bờ!',
            '(Xô) Là hò bả trạo... ơ hò khoan!'
          ]
        }
      ],
      explanation: 'Niềm vui vỡ òa của ngư dân khi chiến thắng thử thách đại dương, trở về vòng tay ấm áp của gia đình và làng xóm.'
    },
    choreography: [
      'Trạo phu đứng thẳng lưng, ngả người ra sau rồi rướn mình về phía trước theo nhịp chèo lướt.',
      'Đầu dầm chèo gỗ vung lên cao 45 độ chém xuống nước đồng loạt tạo tiếng gió rít.',
      'Tổng Lái xoay chèo lái lượn sóng hình chữ S dũng mãnh của võ thuật Bình Định.'
    ],
    costumeAndProps: 'Khăn đầu rìu vàng nghệ, đai lưng đỏ thắt nút cánh bướm, dầm chèo gỗ thếp vàng chạm mắt phượng.',
    culturalContext: 'Âm hưởng Tuồng Đào Tấn và thế võ Tây Sơn được tích hợp hoàn hảo trong điệu Nam Khách vùng Bình Định - Quảng Ngãi.',
    audioPreset: 'chieng-co'
  },
  {
    id: 'hat-ly-con-ca',
    name: 'Hát Lý Con Cá / Vè Hoạt Kê',
    titleCn: '魚 歌 滑 稽',
    role: 'Tổng Khoang (Tổng Tiền/Hậu)',
    roleCategory: 'tong-khoang',
    mood: 'vui-nhon',
    moodLabel: 'Hài hước & Lạc quan',
    region: 'Toàn vùng duyên hải Nam Trung Bộ',
    regionCategory: 'toan-vung',
    description: 'Khoảng nghỉ vui nhộn giữa đại lễ. Tổng Khoang với cử chỉ tếu táo, cầm gàu sòng tát nước và hồ lô rượu đem lại tiếng cười sảng khoái cho toàn thể dân làng.',
    musicalStructure: {
      scale: 'Điệu Lý dân ca Nam Trung Bộ mộc mạc, tiết tấu nghịch phách ngộ nghĩnh',
      tempo: 'Nhịp nhộn nhịp, chuyển phách linh hoạt theo ngẫu hứng của diễn viên',
      instruments: ['Gàu sòng gõ vào mạn gỗ', 'Mõ cóc tre', 'Tiếng vỗ tay phụ họa'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Tổng Khoang (Tếu táo)',
          text: [
            'Khoang thuyền đầy nước ta tát cho mau,',
            'Cá thu cá ngừ nhảy loi choi trong rổ!',
            'Rượu nếp ai cất mà thơm phức thế này?',
            'Nghiêng một ngụm nhỏ cho ấm bụng người đi biển!'
          ]
        },
        {
          speaker: 'Trạo phu (Trêu đùa)',
          text: [
            '(Xô) Tổng Khoang say sóng rồi bà con ơi!',
            '(Xô) Tát nước ra ngoài đừng hắt vào áo bạn!',
            '(Xô) Ớ hò... tát nước khoang thuyền!'
          ]
        }
      ],
      explanation: 'Tính cách lạc quan yêu đời, biến gian lao vất vả thành nụ cười của người dân miền biển.'
    },
    choreography: [
      'Tổng Khoang đi bước chân xiêu vẹo mô phỏng say sóng hoặc say rượu.',
      'Cầm gàu sòng múc nước tưởng tượng dưới sàn rồi tung lên cao.',
      'Chạy lăng xăng trêu chọc các tay chèo và mời rượu khán giả đứng quanh sân lăng.'
    ],
    costumeAndProps: 'Áo bà ba ngắn ngũ sắc, quần xắn ống cao, khăn rằn quấn cổ, tay cầm gàu sòng đồng và bầu rượu hồ lô.',
    culturalContext: 'Vai diễn Tổng Khoang đòi hỏi khiếu hài hước tự nhiên, phản ánh nét hóm hỉnh đặc trưng của người dân xứ Nẫu và duyên hải miền Trung.',
    audioPreset: 'mo-tre'
  },
  {
    id: 'ho-mai-nhi',
    name: 'Hò Mái Nhì (Nhịp Kéo Lưới Khoang Đầy)',
    titleCn: '拽 網 勞 動',
    role: 'Hàng Trạo Tả & Trạo Hữu',
    roleCategory: 'trao-phu',
    mood: 'lao-dong',
    moodLabel: 'Nhịp nhàng & Bền bỉ',
    region: 'Đà Nẵng, Quảng Nam, Ninh Thuận',
    regionCategory: 'da-nang-quang-nam',
    description: 'Mô phỏng động tác kéo lưới rùng, kéo lưới vây trên biển êm. Nhịp điệu khoan thai, nhẫn nại, thể hiện sự cần cù gắn bó với từng luồng cá bến quê.',
    musicalStructure: {
      scale: 'Thang âm Hò - Xang - Xê trầm lắng, ngân nga luyến láy sông nước',
      tempo: 'Nhịp điệu đều đặn như nhịp thở của người thợ kéo lưới',
      instruments: ['Mõ tre', 'Đàn nhị', 'Tiếng dầm chèo cọ vào mạn thuyền'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Trạo Tả (Xướng)',
          text: [
            'Lưới giăng bạc bến rạng ngời,',
            'Nắm dây ta kéo... nhịp người với ta!'
          ]
        },
        {
          speaker: 'Trạo Hữu (Đáp)',
          text: [
            '(Xô) Kéo cho nặng lưới cá đầy,',
            '(Xô) Mẹ già em nhỏ đêm ngày ngóng trông!'
          ]
        }
      ],
      explanation: 'Khắc họa cảnh lao động tập thể nhịp nhàng, tình yêu lao động và nghĩa tình gia đình sâu nặng.'
    },
    choreography: [
      'Hai hàng trạo phu đối xứng nhau, ngả người theo góc 30 độ đồng loạt vươn tay kéo dầm.',
      'Động tác chèo bơi nhịp nhàng theo chiều dọc tạo ảo giác con thuyền đang rẽ sóng chậm rãi.'
    ],
    costumeAndProps: 'Áo nẹp xanh viền vàng và đỏ viền xanh, dầm chèo gỗ mít nhẹ sơn son.',
    culturalContext: 'Điệu Hò Mái Nhì biển phản ánh cuộc sống thanh bình của ngư dân khi con nước êm và luồng cá rộ.',
    audioPreset: 'mo-tre'
  },
  {
    id: 'ho-xo-hau-than',
    name: 'Hò Xô & Hầu Thần (Hiệp Xướng Toàn Đoàn)',
    titleCn: '合 唱 候 神',
    role: 'Toàn Bộ 16 Trạo Phu & Tam Tổng',
    roleCategory: 'toan-doan',
    mood: 'linh-thieng',
    moodLabel: 'Trang nghiêm & Đại đoàn kết',
    region: 'Vạn Thủy Tú, Vạn An Thạnh, Lăng Thọ Quang, Lăng Đông Tác',
    regionCategory: 'toan-vung',
    description: 'Khúc hiệp xướng vĩ đại của toàn bộ đội hình Bả Trạo khi thuyền cập bến trước chánh điện Lăng Ông để làm lễ dâng quả phúc tạ ơn Thần Nam Hải.',
    musicalStructure: {
      scale: 'Hòa âm đa bè dân gian (Xướng - Xô), âm hưởng vang dội khắp bến bãi',
      tempo: 'Nhịp hùng dũng, đồng bộ tuyệt đối từ tiếng gõ dầm đến tiếng dậm chân',
      instruments: ['Toàn bộ dàn nhạc bát âm', 'Trống sấm', 'Chiêng lệnh', 'Phách tiền'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Tam Tổng (Đồng xướng)',
          text: [
            'Thuyền rồng cập bến Lăng đường,',
            'Muôn dân kính cẩn dâng tuần tâm hương!'
          ]
        },
        {
          speaker: 'Toàn thể 16 Trạo phu (Đồng thanh)',
          text: [
            '(Xô) Nam Hải linh Thần chứng giám!',
            '(Xô) Biển lặng sóng trong, muôn thuở an lành!',
            '(Xô) Ớ hò... bả trạo khoan hò khoan!'
          ]
        }
      ],
      explanation: 'Kết thúc màn diễn xướng bằng lời chúc phúc quốc thái dân an, toàn thể ngư dân đồng lòng gắn bó với biển đảo quê hương.'
    },
    choreography: [
      'Toàn bộ 16 con trạo dựng đứng mái chèo thẳng tắp hướng mũi dầm lên trời tạo thành hàng rào danh dự.',
      'Tam Tổng dẫn đầu quỳ lạy ba lạy bốn vái trước Án ngọc.',
      'Cả đoàn cùng dậm chân ba nhịp theo ba hồi trống sấm dứt màn.'
    ],
    costumeAndProps: 'Đầy đủ phục trang gấm điều, dầm chèo thếp vàng, cờ lệnh và án hương.',
    culturalContext: 'Khoảnh khắc thiêng liêng nhất kết nối phần diễn xướng nghệ thuật với tín ngưỡng tâm linh của cả vạn chài.',
    audioPreset: 'chieng-co'
  },
  {
    id: 'hat-mua-den',
    name: 'Hát Múa Đèn & Dâng Hoa Chầu Thần',
    titleCn: '燈 花 禮 讚',
    role: 'Đội Học Trò Lễ (4 - 8 người)',
    roleCategory: 'hoc-tro-le',
    mood: 'linh-thieng',
    moodLabel: 'Thanh tịnh & Trang nghiêm',
    region: 'Khánh Hòa, Ninh Thuận, Bình Thuận',
    regionCategory: 'ninh-thuan-binh-thuan',
    description: 'Nghi thức diễn xướng của các thanh niên đồng nam tinh khiết, tay nâng cặp đèn hoa đăng hoặc đĩa hoa ngũ sắc uốn lượn theo hình chữ "Nhất" và chữ "Tâm" dâng lên Án ngọc.',
    musicalStructure: {
      scale: 'Điệu nhạc lễ cung đình Đàng Trong, âm hưởng êm dịu, trang trọng',
      tempo: 'Nhịp chậm, mỗi bước chân là một nhịp gõ chiêng con',
      instruments: ['Đàn cò', 'Đàn kìm', 'Kèn tiểu', 'Chiêng núm nhỏ'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Xướng lễ',
          text: [
            'Dâng ngọn đèn thanh cao soi sáng đại dương,',
            'Dâng đóa hoa thơm tỏa ngát Lăng đình.'
          ]
        },
        {
          speaker: 'Học trò lễ (Hát chầu)',
          text: [
            'Linh Thần ngự chốn thanh u,',
            'Phù trì ngư phủ bốn mùa bình yên!'
          ]
        }
      ],
      explanation: 'Cầu mong sự trong sạch, thanh thản cho tâm hồn người đi biển và ánh sáng chỉ đường giữa đêm tối mênh mông.'
    },
    choreography: [
      'Bước đi chữ "Nhất" (一) và chữ "Tâm" (心) mềm mại không gây tiếng động.',
      'Hai tay bưng hoa đăng ngang mày, đầu hơi nghiêng cung kính.',
      'Động tác dâng đèn ba lần lên ngang trán rồi hạ xuống ngang ngực.'
    ],
    costumeAndProps: 'Áo dài lụa màu thiên thanh hoặc lục nhạt, khăn đóng xếp nếp, hài nhung, cặp đèn hoa đăng thắp nến sáp ong.',
    culturalContext: 'Thể hiện chiều sâu mỹ học và sự dung hợp giữa nhạc lễ cung đình Huế với nghi thức vạn chài Nam Trung Bộ.',
    audioPreset: 'chieng-co'
  },
  {
    id: 'van-thinh-thuy-toc',
    name: 'Điệu Khấn Nghinh Thần Thủy Tộc Ngoài Khơi',
    titleCn: '水 族 迎 神',
    role: 'Chánh Chủ Tế & Thuyền Rồng',
    roleCategory: 'toan-doan',
    mood: 'linh-thieng',
    moodLabel: 'Hải khơi mênh mông',
    region: 'Quần đảo Lý Sơn, Vịnh Nha Trang, Phú Quý',
    regionCategory: 'toan-vung',
    description: 'Bài văn khấn xướng ngâm đặc biệt giữa tiếng sóng gió ngoài biển cách bờ 2-3 hải lý. Khi xin được keo Âm Dương thì toàn đoàn tàu gióng còi mừng Thần giáng linh.',
    musicalStructure: {
      scale: 'Điệu ngâm văn tế cổ truyền, giọng ngâm vang dội hòa cùng tiếng sóng biển',
      tempo: 'Nhịp tự do theo nhịp bồng bềnh của con sóng nước',
      instruments: ['Trống lệnh trên tàu', 'Tù và vỏ ốc biển', 'Chiêng đồng'],
    },
    lyrics: {
      stanzas: [
        {
          speaker: 'Chánh tế (Ngâm khấn ngoài biển)',
          text: [
            'Trời biển bao la, nước non ngàn dặm,',
            'Đức Ngư Ông hiển lộng giữa trùng dương!',
            'Nay vạn chài kết đoàn thuyền hoa kính bái,',
            'Cung thỉnh linh Thần hồi giá nhập Lăng!'
          ]
        },
        {
          speaker: 'Tàu thuyền đồng thanh',
          text: [
            '(Hú còi vang trời - Ba hồi chiêng trống đón Thần)',
            'Nhất Âm Nhất Dương... Thần đã chứng tri!'
          ]
        }
      ],
      explanation: 'Khoảnh khắc thiêng liêng nhất ngoài đại dương khi ngư dân tin rằng linh khí Cá Ông đã ngự trên kiệu rước về đất liền.'
    },
    choreography: [
      'Chánh tế quỳ trước bàn hương án đặt ở mũi tàu đầu rồng bồng bềnh trên sóng.',
      'Hai tay nâng đĩa đựng hai đồng tiền cổ gieo xuống đĩa trong tiếng nguyện cầu im phăng phắc của cả đoàn tàu.'
    ],
    costumeAndProps: 'Áo thụng lam tế lễ, bài vị Nam Hải Tôn Thần, kiệu bát cống mini trên thuyền hoa, đôi tiền cổ triều Nguyễn.',
    culturalContext: 'Phong tục nghinh thủy lục thể hiện mối liên hệ trực tiếp giữa ngư dân và biển cả vô tận, nơi con người luôn nhỏ bé trước thiên nhiên nhưng có điểm tựa tâm linh kiên vững.',
    audioPreset: 'trong-lenh'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'tin-nguong',
    categoryLabel: 'Tín Ngưỡng Cá Ông',
    question: 'Vì sao ngư dân Nam Trung Bộ tôn thờ cá Voi là "Đức Ngư Ông" hay "Nam Hải Cự Tộc Ngọc Lân Thần"?',
    answer: 'Trong tâm thức ngư dân, cá Voi là loài vật khổng lồ nhưng hiền lành, nhân từ, thường xuyên che chắn sóng dữ và cứu giúp những chiếc thuyền nan gặp nạn ngoài biển. Tín ngưỡng này đan xen giữa truyền thuyết Quan Âm Bồ Tát ném mảnh áo cà sa xuống biển hóa thành cá voi để cứu vớt chúng sinh, và tích vua Gia Long (Nguyễn Ánh) khi bôn tẩu ngoài vịnh Xiêm La suýt đắm thuyền được cá Voi áp mạn cứu thoát. Sau khi lên ngôi năm 1802, vua Gia Long chính thức ban chiếu sắc phong cá Voi là Nam Hải Cự Tộc Ngọc Lân Thượng Đẳng Thần.',
    keyReference: 'Đại Nam Nhất Thống Chí & Sắc phong triều Gia Long ngũ niên (1806)',
    citation: {
      recordName: 'Sắc phong Triều Nguyễn và Tín ngưỡng thờ Nam Hải Thần',
      community: 'Trung tâm Lưu trữ Quốc gia IV và Hội đồng Trưởng lão các Vạn chài Nam Trung Bộ',
      location: 'Hệ thống lăng miếu vạn chài ven biển từ Đà Nẵng đến Bình Thuận',
      source: 'Đại Nam Nhất Thống Chí, Châu bản triều Nguyễn (Mục Lễ bộ) và 24 đạo sắc phong gốc lưu giữ tại các Vạn Thủy Tú, Đông Tác, Cảnh Dương'
    }
  },
  {
    id: 'faq-2',
    category: 'nghi-le',
    categoryLabel: 'Nghi Lễ Tang Tế',
    question: 'Thế nào là hiện tượng "Ông Lụy"? Vì sao người đầu tiên phát hiện lại được làm "Trưởng nam"?',
    answer: 'Khi cá Voi già yếu, bị thương hoặc kiệt sức trôi dạt vào bờ và qua đời, ngư dân không bao giờ dùng từ "chết" mà gọi cung kính là "Ông lụy" hoặc "Ông quy thiên". Người đầu tiên phát hiện xác Ông dạt bờ biển được làng xem là người có đại phước được Thần lựa chọn. Người đó được vinh dự làm "Trưởng nam", có nghĩa vụ chịu tang phục đúng 3 năm (áo gai, mũ rơm, chống gậy trúc) như con chịu tang cha mẹ ruột. Vạn chài sẽ hỗ trợ toàn bộ kinh phí mai táng và chăm lo cho gia đình người đó.',
    keyReference: 'Hương ước Vạn Thủy Tú & Phong tục làng chài xứ Nẫu',
    citation: {
      recordName: 'Quy thức tang tế Cá Ông lụy và Thờ phụng Ngọc Cốt Vạn Đông Tác',
      community: 'Cụ Nguyễn Văn Mười (Nghệ nhân Ưu tú Bả Trạo) và Hội đồng bô lão Vạn Đông Tác',
      location: 'Khu phố Đông Tác, phường Phú Lâm, thành phố Tuy Hòa, tỉnh Phú Yên',
      source: 'Sổ ghi chép tang lễ Cá Ông vạn Đông Tác chép từ năm 1888 và Quyết định số 3325/QĐ-BVHTTDL năm 2018 của Bộ VHTTDL'
    }
  },
  {
    id: 'faq-3',
    category: 'ba-trao',
    categoryLabel: 'Diễn Xướng Bả Trạo',
    question: 'Thuật ngữ "Bả Trạo" nghĩa là gì và cấu trúc của một đội hình Bả Trạo gồm những ai?',
    answer: 'Theo từ Hán-Nôm: "Bả" (把) nghĩa là nắm chặt, cầm giữ; "Trạo" (棹) nghĩa là mái chèo. "Bả Trạo" có nghĩa là nắm chắc mái chèo cùng nhau vượt qua sóng gió hiểm nguy. Đội hình bả trạo tượng trưng cho một chiếc thuyền rồng sống động gồm: Tổng Mũi (đứng đầu thuyền, lĩnh xướng, cầm phách sinh tiền), Tổng Khoang (đứng giữa thân thuyền, vai hề vui nhộn, tát nước và mời rượu), Tổng Lái (đứng sau lái, cầm chèo tỳ dài uy nghi chỉ huy) cùng 12 đến 16 Trạo phu (con trạo) chia đều hai hàng Tả - Hữu cầm dầm chèo gỗ sơn son thếp vàng.',
    keyReference: 'Khảo tả Dân ca Nghi lễ Nam Trung Bộ - Viện Âm nhạc',
    citation: {
      recordName: 'Nghệ thuật trình diễn dân gian Hát Bả Trạo Khánh Hòa',
      community: 'Nghệ nhân Dân gian Nguyễn Hữu Sanh và Ban khánh tiết Lăng Đầm Hòn Khói',
      location: 'Bán đảo Hòn Khói, phường Ninh Hải, thị xã Ninh Hòa, tỉnh Khánh Hòa',
      source: 'Văn bản chép tay chữ Nôm bài chèo Bả Trạo Hòn Khói lưu giữ tại gia đình nghệ nhân họ Nguyễn (niên đại Tự Đức thứ 18 - 1865)'
    }
  },
  {
    id: 'faq-4',
    category: 'nghi-le',
    categoryLabel: 'Nghi Thức Nghinh Thần',
    question: 'Tại sao trong nghi thức Nghinh Thủy Lục ngoài biển lại tuyệt đối kiêng cúng thịt heo?',
    answer: 'Khi đoàn tàu ra biển khơi làm lễ xin keo thỉnh linh vị Đức Ngư Ông, bàn hương án trên thuyền chính chỉ được bày phẩm vật chay thanh khiết: hoa tươi ngũ sắc, trái cây, trầu cau tơ, trà và rượu trắng tinh khiết. Ngư dân quan niệm cõi đại dương bao la là nơi thanh tịnh của Thủy thần, tuyệt đối không mang thịt động vật sống ra biển. Đại lễ dâng tế cỗ tam sinh (heo sống cạo sạch lông) chỉ được tiến hành trang nghiêm sau đó tại chánh điện Lăng Ông trên đất liền.',
    keyReference: 'Lệ vạn Lăng Nam Hải Vĩnh Trường & Sa Huỳnh',
    citation: {
      recordName: 'Lễ hội Cầu ngư thành phố Đà Nẵng',
      community: 'Cụ Trần Hữu Đức (Trưởng ban Trị sự Lăng Ông Thọ Quang) cùng vạn dân phường Thọ Quang',
      location: 'Phường Thọ Quang, quận Sơn Trà, thành phố Đà Nẵng',
      source: 'Văn tế chữ Hán - Nôm "Nam Hải Ngọc Lân Thần Tế Văn" (bản khắc gỗ niên hiệu Thiệu Trị thứ 3 - 1843) và Quyết định số 2960/QĐ-BVHTTDL'
    }
  },
  {
    id: 'faq-5',
    category: 'di-tich',
    categoryLabel: 'Kiến Trúc & Di Tích',
    question: 'Bộ cốt cá Voi dài 22 mét lớn nhất Đông Nam Á hiện được bảo tồn ở đâu?',
    answer: 'Bộ cốt Ông Chuông dài 22m, nặng 65 tấn hiện được bảo tồn nguyên vẹn và tôn kính tại Vạn Thủy Tú, nằm trên đường Ngư Ông, phường Đức Thắng, thành phố Phan Thiết, tỉnh Bình Thuận. Vạn Thủy Tú được khởi dựng từ năm 1762, hiện lưu giữ hơn 100 bộ cốt cá voi qua hơn 260 năm và 24 đạo sắc phong của các đời vua triều Nguyễn. Năm 1996, Vạn Thủy Tú được công nhận là Di tích Lịch sử - Văn hóa cấp Quốc gia.',
    keyReference: 'Hồ sơ Di tích Quốc gia Vạn Thủy Tú - Bộ VHTTDL',
    citation: {
      recordName: 'Lễ hội Cầu ngư Vạn Thủy Tú',
      community: 'Ban Quản trị Vạn Thủy Tú, Cụ Lê Văn Cường (Tổng Lái) và các bô lão vạn chài Đức Thắng',
      location: 'Đường Ngư Ông, phường Đức Thắng, thành phố Phan Thiết, tỉnh Bình Thuận',
      source: 'Hương ước vạn chài Vạn Thủy Tú (khắc lập 1762), 24 đạo sắc phong của các vua triều Nguyễn và hồ sơ di sản quốc gia 2019'
    }
  },
  {
    id: 'faq-6',
    category: 'nghi-le',
    categoryLabel: 'Nghi Lễ Tang Tế',
    question: 'Quy trình táng cát 3 năm và cải táng "Thượng ngọc cốt" diễn ra như thế nào?',
    answer: 'Sau khi Ông lụy, xác cá được vạn chài hợp sức đưa lên khu cồn cát cao gọi là Đụn Cát (hoặc khu mộ táng sau Lăng), quấn bằng vải điều đỏ và chiếu hoa, lấp cát trắng dày. Đúng 3 năm (hoặc 5 năm với cá quá lớn), vạn chài làm lễ Cải táng. Dân làng khai quật, nhặt từng đốt xương ngà rửa sạch bằng rượu trắng ngâm quế thơm, phơi khô trong bóng râm, xếp cẩn thận vào thạp sành da lươn hoặc quách gỗ son, rước về an vị vĩnh hằng trong Thượng đình cốt ở Hậu tẩm Lăng Ông.',
    keyReference: 'Tập quán cải táng ngư dân duyên hải Phú Yên - Khánh Hòa',
    citation: {
      recordName: 'Quy thức tang tế Cá Ông lụy và Thờ phụng Ngọc Cốt Vạn Đông Tác',
      community: 'Cụ Nguyễn Văn Mười (Nghệ nhân Ưu tú Bả Trạo) và Hội đồng bô lão Vạn Đông Tác',
      location: 'Khu phố Đông Tác, phường Phú Lâm, thành phố Tuy Hòa, tỉnh Phú Yên',
      source: 'Sổ ghi chép tang lễ Cá Ông vạn Đông Tác chép từ năm 1888 và Quyết định số 3325/QĐ-BVHTTDL năm 2018 của Bộ VHTTDL'
    }
  },
  {
    id: 'faq-7',
    category: 'tin-nguong',
    categoryLabel: 'Sắc Phong Triều Nguyễn',
    question: 'Các đời vua triều Nguyễn đã ban tặng những danh hiệu cao quý nào cho Thần Nam Hải?',
    answer: 'Các triều vua từ Gia Long, Minh Mạng, Thiệu Trị, Tự Đức đến Đồng Khánh, Khải Định đều phong tặng các mỹ tự tột đỉnh: "Nam Hải Cự Tộc Ngọc Lân Chi Thần", "Từ Tế Trang Nghiêm Dực Bảo Trung Hưng Tôn Thần", "Đại Càn Quốc Gia Nam Hải Cự Tộc Thượng Đẳng Thần". Chữ "Từ Tế" mang nghĩa là đức nhân từ cứu vớt chúng sinh; sắc phong của vua Khải Định còn gắn liền sự nghiệp của Cá Ông với việc bảo vệ ngư dân khai thác tại quần đảo Hoàng Sa và Trường Sa.',
    keyReference: 'Châu bản & Sắc phong Triều Nguyễn (1802 - 1945)',
    citation: {
      recordName: 'Sắc phong Triều Nguyễn và Tín ngưỡng thờ Nam Hải Thần',
      community: 'Trung tâm Lưu trữ Quốc gia IV và Hội đồng Trưởng lão các Vạn chài Nam Trung Bộ',
      location: 'Hệ thống lăng miếu vạn chài ven biển từ Đà Nẵng đến Bình Thuận',
      source: 'Đại Nam Nhất Thống Chí, Châu bản triều Nguyễn (Mục Lễ bộ) và 24 đạo sắc phong gốc lưu giữ tại các Vạn Thủy Tú, Đông Tác, Cảnh Dương'
    }
  },
  {
    id: 'faq-8',
    category: 'cong-dong',
    categoryLabel: 'Cộng Đồng Vạn Chài',
    question: '"Vạn chài" hoạt động theo nguyên tắc nào và ai là người đứng đầu?',
    answer: 'Vạn chài (hay Vạn ngư) là tổ chức cộng đồng tự quản truyền thống của ngư dân miền Trung. Đứng đầu là Vạn trưởng (người cao niên, có uy tín và đạo đức song toàn), bên cạnh có Ban Vạn sự phụ trách cúng tế và tương trợ. Vạn chài hoạt động theo "Lệ vạn" (hương ước riêng), có quỹ hỗ trợ cho các thuyền viên rủi ro, và luật bất thành văn: hễ thấy tàu bạn gặp nạn ngoài khơi phải lập tức cứu người bỏ lưới.',
    keyReference: 'Luật tục và Hương ước nghề cá Đàng Trong',
    citation: {
      recordName: 'Lễ hội Cầu ngư Vạn Thủy Tú',
      community: 'Ban Quản trị Vạn Thủy Tú, Cụ Lê Văn Cường (Tổng Lái) và các bô lão vạn chài Đức Thắng',
      location: 'Đường Ngư Ông, phường Đức Thắng, thành phố Phan Thiết, tỉnh Bình Thuận',
      source: 'Hương ước vạn chài Vạn Thủy Tú (khắc lập 1762) và hồ sơ di sản phi vật thể quốc gia 2019'
    }
  },
  {
    id: 'faq-9',
    category: 'ba-trao',
    categoryLabel: 'Diễn Xướng Bả Trạo',
    question: 'Hát Bả Trạo có những làn điệu cốt lõi nào và có gì khác với Hát Bội (Tuồng)?',
    answer: 'Hát Bả Trạo là sự dung hợp tài tình giữa nghệ thuật Tuồng Đàng Trong với các điệu hò sông nước dân gian. Các làn điệu cốt lõi gồm: Hò Mái Ba (lĩnh xướng dũng mãnh), Hát Nam Ai (khóc Ông bi tráng), Hát Nam Khách (vượt bão hào hùng), Hát Lý Con Cá (hoạt kê tát nước) và Hò Xô (toàn đoàn đáp lại). Điểm khác biệt lớn nhất là Bả Trạo gắn liền với một không gian diễn xướng nghi lễ tâm linh trước Án ngọc Thần biển, diễn viên vừa là nghệ nhân vừa là con dân làng chài cầu xin sự bình an.',
    keyReference: 'Nghệ thuật Sân khấu Dân gian Miền Trung',
    citation: {
      recordName: 'Diễn xướng dân gian Bả Trạo Quảng Ngãi',
      community: 'Nghệ nhân Bùi Tấn Lực (Tổng Mũi) và Câu lạc bộ Di sản Bả Trạo huyện Bình Sơn',
      location: 'Thôn Tân Thạnh, xã Bình Thạnh, huyện Bình Sơn, tỉnh Quảng Ngãi',
      source: 'Bản chép tay nghệ thuật hát múa Bả Trạo Quảng Ngãi (Hội Văn nghệ Dân gian Việt Nam)'
    }
  },
  {
    id: 'faq-10',
    category: 'cong-dong',
    categoryLabel: 'Giới Trẻ & Bảo Tồn',
    question: 'Lớp trẻ, học sinh và sinh viên có thể tham gia bảo tồn di sản Cầu ngư như thế nào?',
    answer: 'Thanh niên làng chài đóng vai trò nòng cốt trong đội Trạo phu (cầm dầm chèo), đội đua thuyền thúng và đội rước kiệu nghinh thần trên biển. Sinh viên và các bạn trẻ có thể tham gia số hóa lời hò cổ truyền, ghi chép ký ức của các nghệ nhân cao tuổi trước nguy cơ mai một, quảng bá nét đẹp tín ngưỡng nhân văn của người đi biển lên các nền tảng số, và gìn giữ môi trường biển quê hương luôn trong sạch.',
    keyReference: 'Chương trình Bảo tồn Di sản Văn hóa Phi vật thể Quốc gia',
    citation: {
      recordName: 'Chính sách bảo tồn và truyền dạy di sản Cầu ngư cho thế hệ trẻ',
      community: 'Câu lạc bộ Bảo tồn Di sản Văn hóa Sa Huỳnh và Hội Di sản Văn hóa tỉnh Quảng Ngãi',
      location: 'Thị xã Đức Phổ, tỉnh Quảng Ngãi và các địa bàn làng chài duyên hải miền Trung',
      source: 'Đề án "Bảo tồn và phát huy giá trị di sản văn hóa phi vật thể Lễ hội Cầu ngư giai đoạn 2021-2030" của Bộ VHTTDL'
    }
  }
];
