import React from 'react';
import { ASTROLOGER_STYLES } from '../constants';
import { AstrologerOption } from '../types';

interface StyleSelectorProps {
  selectedStyle: AstrologerOption;
  setSelectedStyle: (style: AstrologerOption) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  setSelectedStyle
}) => {
  return (
    <div className="space-y-4">
      <label className="block text-lg font-bold text-purple-300">
        選擇占星師風格
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ASTROLOGER_STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              selectedStyle.id === style.id
                ? 'border-purple-500 bg-purple-500 bg-opacity-20 shadow-lg transform scale-105'
                : 'border-gray-600 bg-gray-800 hover:border-purple-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{style.emoji}</span>
              <span className="font-bold text-lg">{style.name}</span>
            </div>
            <p className="text-sm text-gray-300">{style.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
