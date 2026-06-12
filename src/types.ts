export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  category: 'technology' | 'vehicles' | 'household' | 'digital' | 'restricted';
  price: number;
  rating: number;
  status: string;
  specs: string[];
  reviews: Review[];
  imageUrl: string;
}

export interface SimulationStat {
  visitors: number;
  attempts: number;
  alerts: number;
  score: number;
}

export interface ServerLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'SUCCESS';
  message: string;
  node?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  educationalExplanation: string;
}
