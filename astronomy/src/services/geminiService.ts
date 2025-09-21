import { GoogleGenerativeAI } from '@google/generative-ai';
import { ZodiacOption, Timeframe, AstrologerOption } from '../types';

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('請在 .env 文件中設置 REACT_APP_GEMINI_API_KEY');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export const generateHoroscope = async (
  sunSign: ZodiacOption,
  risingSign: ZodiacOption | null,
  moonSign: ZodiacOption | null,
  timeframe: Timeframe,
  style: AstrologerOption
): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // 獲取當前日期
    const now = new Date();
    const currentDate = now.toLocaleDateString('zh-TW', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
    
    const timeframeText = timeframe === 'daily' ? '今日' : '本週';
    const signsText = `太陽星座：${sunSign.name}` +
      (risingSign ? `，上升星座：${risingSign.name}` : '') +
      (moonSign ? `，月亮星座：${moonSign.name}` : '');

    const stylePrompts = {
      traditional: '以傳統占星師的嚴謹風格',
      modern: '以現代占星師的實用風格',
      mystical: '以神秘占星師的詩意風格',
      humorous: '以幽默占星師的輕鬆風格'
    };

    const prompt = `
今天是 ${currentDate}。
請${stylePrompts[style.id as keyof typeof stylePrompts]}，為${signsText}的人撰寫${timeframeText}運勢。

要求：
1. 直接開始運勢內容，不要寫日期佔位符
2. 包含：整體運勢、愛情、事業、財運、健康
3. 使用繁體中文
4. 控制在200-400字
5. 語調要符合${style.name}的特色
6. 不要使用「請自行填入」等佔位符文字

請直接開始運勢解讀：
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error('API 調用錯誤：', error);
    throw new Error(`無法生成運勢：${error instanceof Error ? error.message : '網絡連接問題'}`);
  }
};
