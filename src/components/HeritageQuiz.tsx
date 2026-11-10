import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Thuật ngữ "Bả Trạo" trong diễn xướng Cầu ngư có nguồn gốc và ý nghĩa là gì?',
    options: [
      'Là tên một loại cá biển quý hiếm ở vịnh miền Trung',
      '"Bả" là nắm giữ, "Trạo" là mái chèo (cầm dầm chèo chèo thuyền)',
      'Là tên một loại nhạc cụ gõ bằng vỏ sò cổ xưa',
      'Là trang phục đội đầu của hoa tiêu trên tàu'
    ],
    correctIndex: 1,
    explanation: 'Trong từ Hán-Nôm: "Bả" (把) có nghĩa là cầm nắm, giữ chặt; "Trạo" (棹) có nghĩa là mái chèo. Hát bả trạo là động tác nắm chắc mái chèo cùng nhau vượt qua sóng gió hiểm nguy.'
  },
  {
    id: 2,
    question: 'Khi cá Ông dạt vào bờ (Ông lụy), người đầu tiên phát hiện có trọng trách gì đặc biệt?',
    options: [
      'Được toàn quyền sở hữu ngọc cốt mang về nhà riêng',
      'Được tôn là "Trưởng nam của Thần", chịu tang phục 3 năm như tang cha mẹ',
      'Phải nộp phạt cho vạn chài vì mang điềm gở về làng',
      'Phải rời làng chài đi nơi khác trong 1 năm'
    ],
    correctIndex: 1,
    explanation: 'Theo tục lệ lâu đời của ngư dân Nam Trung Bộ, người đầu tiên thấy Ông lụy được xem là người có đại phước được Thần chọn. Người này làm Trưởng nam, mặc áo gai, chống gậy trúc chịu tang 3 năm và được cả vạn tương trợ kinh phí.'
  },
  {
    id: 3,
    question: 'Vị vua triều Nguyễn nào từng được đôi cá Voi cứu thoát bão biển và khởi đầu truyền thống sắc phong?',
    options: [
      'Vua Quang Trung (Nguyễn Huệ)',
      'Vua Lê Lợi',
      'Vua Gia Long (Nguyễn Ánh)',
      'Vua Duy Tân'
    ],
    correctIndex: 2,
    explanation: 'Khi còn bôn tẩu ngoài vịnh Xiêm La, chúa Nguyễn Ánh gặp bão dữ suýt đắm thuyền thì được đôi cá Voi áp sát mạn dìu vào bờ an toàn. Sau khi lên ngôi năm 1802, vua Gia Long sắc phong cá Voi là Nam Hải Cự Tộc Ngọc Lân Tôn Thần.'
  },
  {
    id: 4,
    question: 'Vạn Thủy Tú — nơi lưu giữ bộ xương cá Voi 22 mét lớn nhất Đông Nam Á — nằm ở tỉnh nào?',
    options: [
      'Đà Nẵng',
      'Khánh Hòa (Nha Trang)',
      'Phú Yên (Tuy Hòa)',
      'Bình Thuận (Phan Thiết)'
    ],
    correctIndex: 3,
    explanation: 'Vạn Thủy Tú tọa lạc tại đường Ngư Ông, thành phố Phan Thiết, tỉnh Bình Thuận. Nơi đây khởi dựng từ năm 1762, hiện lưu giữ hơn 100 bộ cốt cá voi cùng 24 đạo sắc phong triều Nguyễn.'
  },
  {
    id: 5,
    question: 'Trong đội hình "Tam Tổng" của Bả Trạo, nhân vật Tổng Khoang đảm nhận vai trò gì?',
    options: [
      'Cầm lái lớn uy nghiêm đứng ở đuôi thuyền',
      'Cầm gàu tát nước, tính tình hóm hỉnh tạo tiếng cười lạc quan giữa gian lao',
      'Chỉ huy thổi tù và báo hiệu thời tiết',
      'Thu tiền của du khách xem biểu diễn'
    ],
    correctIndex: 1,
    explanation: 'Tổng Khoang đứng ở khoảng giữa thân thuyền, tay cầm gàu sòng tát nước và hồ lô rượu, diễn tả những động tác ngộ nghĩnh, say sóng đem lại tiếng cười giải tỏa căng thẳng cho cả đoàn chèo.'
  },
  {
    id: 6,
    question: 'Trong nghi lễ Nghinh Thủy Lục ngoài biển khơi, bàn hương án trên tàu kiêng kỵ điều gì?',
    options: [
      'Kiêng cắm cờ ngũ hành',
      'Tuyệt đối kiêng dâng cúng thịt heo (chỉ dùng hoa quả, trà rượu chay thanh khiết)',
      'Kiêng thắp hương trầm',
      'Kiêng gõ chiêng trống'
    ],
    correctIndex: 1,
    explanation: 'Khi ra khơi xa nghinh thần linh của đại dương về lăng, bàn hương án chỉ dùng phẩm vật chay thanh tịnh gồm trầu cau, trà rượu và ngũ quả. Lễ cúng tam sinh heo toàn sắc chỉ thực hiện sau đó tại chánh điện Lăng Ông.'
  }
];

export const HeritageQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="py-10 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Dành Cho Thanh Niên & Sinh Viên</span>
            <span aria-hidden="true">·</span>
            <span>Hỏi Nhanh - Đáp Gọn Về Di Sản</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Thử Tài Hiểu Biết Về Tín Ngưỡng Biển
          </h2>
          <p className="mt-1.5 text-stone-600 text-xs sm:text-sm">
            6 câu hỏi trắc nghiệm nhanh giúp bạn nắm vững những nét văn hóa cốt lõi và tích xưa thiêng liêng của ngư dân Nam Trung Bộ.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-stone-50 border border-stone-200 p-5 sm:p-7 rounded-sm shadow-xs">
            {/* Progress header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 mb-4 text-xs">
              <span className="font-semibold text-amber-900 uppercase tracking-wider">
                Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="font-mono text-stone-500">
                Điểm số: <strong className="text-amber-900">{score}</strong> / {QUIZ_QUESTIONS.length}
              </span>
            </div>

            <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-4 leading-snug">
              {currentQ.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-2.5 mb-5">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-white border-stone-200 text-stone-800 hover:border-amber-800';
                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                  } else if (idx === selectedAnswer) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    btnStyle = 'bg-white border-stone-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left min-h-[48px] p-3 rounded-xs border transition-all text-xs sm:text-sm flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="font-mono font-bold text-stone-400 shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation */}
            {isAnswered && (
              <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xs mb-5 text-xs text-amber-950 space-y-1 animate-fadeIn">
                <div className="font-bold flex items-center gap-1.5">
                  {selectedAnswer === currentQ.correctIndex ? (
                    <span className="text-emerald-700">✓ Hoàn toàn chính xác!</span>
                  ) : (
                    <span className="text-rose-700">✕ Chưa chính xác!</span>
                  )}
                </div>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Next button */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="min-h-[44px] px-5 py-2 bg-stone-900 hover:bg-amber-900 text-white font-semibold rounded-xs shadow-xs text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu Hỏi Tiếp Theo' : 'Xem Kết Quả Tổng Kết'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-stone-50 border border-stone-200 p-8 rounded-sm shadow-xs text-center space-y-4">
            <span className="text-3xl">✦ ✦ ✦</span>
            <h3 className="font-serif font-bold text-2xl text-stone-900">
              Kết Quả Trắc Nghiệm Di Sản Biển
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Bạn đã trả lời đúng <strong className="text-amber-900 text-lg font-mono">{score}</strong> / {QUIZ_QUESTIONS.length} câu hỏi.
            </p>
            <div className="p-3 bg-white border border-stone-200 rounded-xs max-w-md mx-auto text-xs text-stone-700">
              {score === 6
                ? 'Xuất sắc! Bạn rất am hiểu và gắn bó sâu sắc với văn hóa làng chài Nam Trung Bộ.'
                : score >= 4
                ? 'Rất tốt! Bạn đã nắm vững các phong tục cơ bản về Lễ Nghinh Ông và nghệ thuật Bả Trạo.'
                : 'Hãy tiếp tục khám phá các chuyên mục trong hồ sơ số để hiểu thêm về di sản biển quê hương!'}
            </div>
            <button
              onClick={handleRestart}
              className="min-h-[44px] px-6 py-2 bg-amber-900 hover:bg-stone-900 text-white font-semibold rounded-xs shadow-xs text-xs transition-colors"
            >
              Làm Lại Trắc Nghiệm
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
