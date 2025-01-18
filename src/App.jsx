import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 relative overflow-hidden flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img
          src="/background.jpg" // 배경 이미지를 경로에 맞게 설정
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white space-y-4 w-full">
        {/* 프로필 이미지 */}
        <img
          src="/me.jpg" // 프로필 이미지를 경로에 맞게 설정
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
        {/* 텍스트 */}
        <p className="text-lg font-semibold">Junwon Lee's CV</p>
        <p className="text-sm opacity-80">《Data Analyst》</p>

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
            <i className="fab fa-envelope text-white text-xl"></i>
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
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 text-xs opacity-80 w-full text-center">
          <p>© 2020 - 2024 by cpprhtn</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
