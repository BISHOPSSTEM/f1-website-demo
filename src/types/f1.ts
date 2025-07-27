export interface Driver {
  id: string;
  name: string;
  number: number;
  team: string;
  nationality: string;
  points: number;
  position: number;
  image: string;
  age: number;
  championships: number;
  wins: number;
  podiums: number;
}

export interface Team {
  id: string;
  name: string;
  points: number;
  position: number;
  color: string;
  logo: string;
  drivers: string[];
  championships: number;
  founded: number;
}

export interface Race {
  id: string;
  name: string;
  country: string;
  date: string;
  circuit: string;
  status: 'upcoming' | 'live' | 'completed';
  round: number;
  image: string;
  winner?: string;
  fastestLap?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: string;
  tags: string[];
}
