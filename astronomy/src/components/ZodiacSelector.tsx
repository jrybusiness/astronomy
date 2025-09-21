import React from 'react';
import { ZODIAC_SIGNS } from '../constants';
import { ZodiacOption } from '../types';

interface ZodiacSelectorProps {
  label: string;
  selectedSign: ZodiacOption | null;
  setSelectedSign: (sign: ZodiacOption | null) => void;
  isOptional: boolean;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({
  label,
  selectedSign,
  setSelectedSign,
  isOptional
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-lg font-bold text-purple-300">
        {label}
      </label>
      <div className="relative">
        <select
          value={selectedSign?.id || ''}
          onChange={(e) => {
            if (e.target.value === '' && isOptional) {
              setSelectedSign(null);
            } else {
              const sign = ZODIAC_SIGNS.find(s => s.id === e.target.value);
              setSelectedSign(sign || null);
            }
          }}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
        >
          {isOptional && <option value="">請選擇（可選）</option>}
          {!isOptional && !selectedSign && <option value="">請選擇星座</option>}
          {ZODIAC_SIGNS.map((sign) => (
            <option key={sign.id} value={sign.id}>
              {sign.emoji} {sign.name} ({sign.dates})
            </option>
          ))}
        </select>
      </div>
      {selectedSign && (
        <div className="text-sm text-gray-400 mt-2">
          元素：{selectedSign.element} | 日期：{selectedSign.dates}
        </div>
      )}
    </div>
  );
};

export default ZodiacSelector;
