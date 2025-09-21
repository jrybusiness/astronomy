import { ZodiacOption, AstrologerOption } from './types';

export const ZODIAC_SIGNS: ZodiacOption[] = [
  { id: 'aries', name: '牡羊座', emoji: '♈', dates: '3/21-4/19', element: '火' },
  { id: 'taurus', name: '金牛座', emoji: '♉', dates: '4/20-5/20', element: '土' },
  { id: 'gemini', name: '雙子座', emoji: '♊', dates: '5/21-6/20', element: '風' },
  { id: 'cancer', name: '巨蟹座', emoji: '♋', dates: '6/21-7/22', element: '水' },
  { id: 'leo', name: '獅子座', emoji: '♌', dates: '7/23-8/22', element: '火' },
  { id: 'virgo', name: '處女座', emoji: '♍', dates: '8/23-9/22', element: '土' },
  { id: 'libra', name: '天秤座', emoji: '♎', dates: '9/23-10/22', element: '風' },
  { id: 'scorpio', name: '天蠍座', emoji: '♏', dates: '10/23-11/21', element: '水' },
  { id: 'sagittarius', name: '射手座', emoji: '♐', dates: '11/22-12/21', element: '火' },
  { id: 'capricorn', name: '摩羯座', emoji: '♑', dates: '12/22-1/19', element: '土' },
  { id: 'aquarius', name: '水瓶座', emoji: '♒', dates: '1/20-2/18', element: '風' },
  { id: 'pisces', name: '雙魚座', emoji: '♓', dates: '2/19-3/20', element: '水' }
];

export const ASTROLOGER_STYLES: AstrologerOption[] = [
  {
    id: 'traditional',
    name: '傳統占星師',
    description: '古典嚴謹，準確預測',
    emoji: '🔮'
  },
  {
    id: 'modern',
    name: '現代占星師',
    description: '心理導向，實用建議',
    emoji: '✨'
  },
  {
    id: 'mystical',
    name: '神秘占星師',
    description: '詩意浪漫，靈性指引',
    emoji: '🌙'
  },
  {
    id: 'humorous',
    name: '幽默占星師',
    description: '輕鬆有趣，娛樂為主',
    emoji: '😄'
  }
];
