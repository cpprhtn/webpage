import React from "react";

const images = [
  "/src/assets/background1.jpg",
  "/src/assets/background2.jpg",
  "/src/assets/background3.jpg",
]; // 각 시간대에 맞는 이미지 배열

// 시간대를 결정하는 함수
function getImageIndex() {
  const now = new Date();
  const hours = now.getHours(); // 현재 시간 (0~23)
  
  // 시간대 분류
  if (hours >= 7 && hours < 18) {
    // 아침 ~ 낮 (7:00 ~ 18:00)
    return 0;
  } else if (hours >=20 && hours <5) {
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

// 매 1시간 갱신 (60분마다 체크)
setInterval(() => {
  const index = getImageIndex();
  document.getElementById("background").src = images[index];
}, 60 * 60 * 1000); // 1시간


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
          src="/me.jpg" // 프로필 이미지를 경로에 맞게 설정
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        {/* 텍스트 */}
        <p className="text-4xl font-semibold">Junwon Lee</p>
        <p className="text-2xl opacity-100">《Data Analyst》</p>

        {/* 아이콘 그룹 */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://github.com/cpprhtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fab fa-github text-white w-6 h-6"></i>
          </a>
          
          <a
            href="mailto:cpprhtn@naver.com"
            className="bg-blue-700 hover:bg-blue-800 rounded-full p-3"
          >
            <i className="fas fa-envelope text-white text-xl"></i>
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


        {/* 프로젝트 그룹
        <div className="grid grid-cols-2 gap-4 mt-8">
          {[
            { title: "project1", subtitle: "1" },
            { title: "project2", subtitle: "2" },
            { title: "project3", subtitle: "3" },
            { title: "project4", subtitle: "4" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-opacity-80">{item.subtitle}</p>
            </div>
          ))}
        </div> */}

        <footer className="custom-footer">
          <p>© 2025 by cpprhtn</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
