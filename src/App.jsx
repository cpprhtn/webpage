const images = [
  "/src/assets/background1.jpg",
  "/src/assets/background2.jpg",
  "/src/assets/background3.jpg",
];

function getImageIndex() {
  const now = new Date();
  const hours = now.getHours(); // 현재 시간 (0~23)
  
  // 시간대 분류
  if (hours >= 7 && hours < 18) {
    // 아침 ~ 낮 (7:00 ~ 18:00)
    return 0;
  } else if (hours >=20 || hours <5) {
    // 새벽 ~ 밤 (20:00 ~ 5:00)
    
    return 2;
  } else {
    // 저녁노을 (18:00 ~ 20:00)
    // 아침 노을 (5:00 ~ 7:00)
    return 1;
  }
}

// 초기 이미지 설정
document.addEventListener("DOMContentLoaded", () => {
  const index = getImageIndex();
  document.getElementById("background").src = images[index];
});

// 매 1시간 갱신
setInterval(() => {
  const index = getImageIndex();
  document.getElementById("background").src = images[index];
}, 60 * 60 * 1000);


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 relative overflow-hidden flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          id="background"
          src="/src/assets/background1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white space-y-4 w-full font-black text-shadow">
        {/* 프로필 이미지 */}
        <img
          src="/src/assets/me.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mt-12"
        />
        
        <p className="text-4xl font-semibold">Junwon Lee</p>
        {/* <p className="text-2xl opacity-100">《Data Analyst》</p> */}

        {/* 아이콘 그룹 */}
        <div className="flex space-x-4 mt-6">
          <a
            href="mailto:cpprhtn@naver.com"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fas fa-envelope text-white text-xl"></i>
          </a>

          <a
            href="https://github.com/cpprhtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fab fa-github text-white w-6 h-6"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/cpprhtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fab fa-linkedin text-white w-6 h-6"></i>
          </a>
          
          <a
            href="https://www.instagram.com/cpp_rhtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fab fa-instagram text-white w-6 h-6"></i>
          </a>
        </div>

        <div className="max-w-screen-md mx-auto">
          {/* 프로젝트 그룹 */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { title: "12년간의 다양한 개발 경험", subtitle: "AI(Pytorch, Tensorflow), MLOps(Airflow), ETL(Pandas, Polars), 웹(Front, Backend)" },
              { title: "대규모 데이터 분석", subtitle: "4TB 규모의 해양 데이터 처리 및 분석, 2GB * 100개의 공장 Raw 데이터 처리 및 분석" },
              { title: "4년간의 연구 경험", subtitle: "3개의 AI 논문 1저자 및 1건의 프로그램 특허" },
              { title: "ETRI(한국전자통신연구원) 인턴", subtitle: "환경ICT연구실에서 공장 에너지 관리 시스템 표준화 연구 참여" }
            ]
            .map((item, idx) => (
              <div
                key={idx}
                className="bg-black bg-opacity-15 p-8 rounded-xl hover:bg-opacity-20 transition"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-opacity-80">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* 학력 및 이력 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">학력 및 이력</h2>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {[
                { title: "학력", subtitle: "동아대학교 AI 전공, 2~4학년 과대표/2~3학년 학생회, MLP(Mecca-of-Learning-Pioneer) 학술동아리 설립, ETRI 한국전자통신연구원 연구연수생, 부산대학교 Wireless Networks Lab(WINE) 외부연구원, 부경대학교 해양역학·예측 연구실 외부연구원" },
                { title: "자격증", subtitle: "[NVIDIA] Fundamentals of Deep Learning, [Tensorflow] Tensorflow Developer Certificate" },
                { title: "논문 & 특허", subtitle: "[한국통신학회/1저자] miniEDA: 데이터 메시를 활용한 통합 데이터 분석 및 품질 관리 플랫폼, [한국멀티미디어학회/1저자] 클라우드 기반 웹사이트의 탄소 배출 저감 방안 연구, [한국멀티미디어학회/1저자] Anti-UAV 시스템을 위한 UAV 신호 분류 CNN 모델, [컴퓨터프로그램저작물 저작권] 통계기법을 이용한 해수면온도 관측자료의 이상치 검출 프로그램" },
                { title: "수상이력", subtitle: "[부산테크노파크] 지역현안해결 대학수업지원 프로젝트 우수상, [부산광역시/과학기술정보통신부] 부산 제 7회 ICT 해커톤 대상, [한국멀티미디어학회/인공지능그랜드ICT연구센터] 인공지능 캡스톤디자인 경진대회 우수상, [부산광역시] 부산 제 5회 ICT 해커톤 최우수상, [한국정보과학진흥협회] ICT K-awards 알고리즘 프로그래밍 고등부 장려상, [교내] DevDay AI-SW 실증역량경진대회 경진대회 대상" },
                { title: "교육이수사항", subtitle: "부산정보영재교육원(부산시교육청/2년), 고교 소프트웨어 인재교육(부산대학교/142시간), 데이터 크리에이터 캠프(한국정보화진흥원/60시간)" },
                { title: "Organizers", subtitle: "Python Korea Organizer, C++ Korea Organizer, Airflow Korea Organizer, Seasonal University Study & Communication(SUSC) Co-Founder, Google Developer Student Clubs(GDSC) Core Member, Pytorch 한국 사용자 모임 Moderator" },
                { title: "특이사항", subtitle: "PyTorch 기여 경험, 혼자 공부하는 컴퓨터구조 + 운영체제 베타리더, ChatGPT Reverse Engineering(한국인공지능연구소)" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black bg-opacity-15 p-8 rounded-xl hover:bg-opacity-20 transition flex justify-between items-start"
                >
                  <h3 className="text-lg font-semibold text-left w-48">{item.title}</h3>
                  <div className="text-sm text-opacity-80 w-[100%] text-left overflow-x-auto whitespace-nowrap custom-scrollbar">
                    {item.subtitle.split(",").map((subItem, subIdx) => (
                      <div key={subIdx}>{subItem.trim()}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <footer className="custom-footer">
          <p>© 2025 by cpprhtn</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
