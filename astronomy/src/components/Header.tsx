import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          星座運勢占卜
        </h1>
        <span className="text-4xl sm:text-5xl ml-4">🔮</span>
      </div>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        探索星象的奧秘，揭示你的命運軌跡。選擇你的星座，讓宇宙的智慧為你指引方向。
      </p>
    </header>
  );
};

export default Header;
