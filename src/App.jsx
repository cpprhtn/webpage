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
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        
        <p className="text-4xl font-semibold">Junwon Lee</p>
        <p className="text-2xl opacity-100">《Data Analyst》</p>

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
              className="bg-white bg-opacity-15 p-8 rounded-xl hover:bg-opacity-20 transition"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-opacity-80">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <footer className="custom-footer">
          <p>© 2025 by cpprhtn</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
