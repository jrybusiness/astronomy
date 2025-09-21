export interface ZodiacOption {
  id: string;
  name: string;
  emoji: string;
  dates: string;
  element: string;
}

export interface AstrologerOption {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

export type Timeframe = 'daily' | 'weekly';
