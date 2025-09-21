import React from 'react';

interface HoroscopeDisplayProps {
  horoscope: string;
  isLoading: boolean;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ horoscope, isLoading }) => {
  if (isLoading || !horoscope) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 from-10% via-blue-900 via-30% to-indigo-900 to-90% bg-opacity-50 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🌟</span>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          您的運勢解讀
        </h3>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <div 
          className="text-gray-100 leading-relaxed whitespace-pre-wrap text-base sm:text-lg"
          style={{ lineHeight: '1.8' }}
        >
          {horoscope}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-purple-500 border-opacity-30">
        <p className="text-sm text-gray-400 text-center italic">
          ✨ 願星象的指引為您帶來光明與希望 ✨
        </p>
      </div>
    </div>
  );
};

export default HoroscopeDisplay;
