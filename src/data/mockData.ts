import { Driver, Team, Race, NewsArticle } from '../types/f1';

export const drivers: Driver[] = [
  {
    id: '1',
    name: 'Max Verstappen',
    number: 1,
    team: 'Red Bull Racing',
    nationality: 'Netherlands',
    points: 575,
    position: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=face',
    age: 26,
    championships: 3,
    wins: 54,
    podiums: 98
  },
  {
    id: '2',
    name: 'Sergio Pérez',
    number: 11,
    team: 'Red Bull Racing',
    nationality: 'Mexico',
    points: 285,
    position: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    age: 34,
    championships: 0,
    wins: 6,
    podiums: 39
  },
  {
    id: '3',
    name: 'Lewis Hamilton',
    number: 44,
    team: 'Mercedes',
    nationality: 'United Kingdom',
    points: 234,
    position: 3,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    age: 39,
    championships: 7,
    wins: 103,
    podiums: 197
  },
  {
    id: '4',
    name: 'Fernando Alonso',
    number: 14,
    team: 'Aston Martin',
    nationality: 'Spain',
    points: 206,
    position: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    age: 42,
    championships: 2,
    wins: 32,
    podiums: 106
  },
  {
    id: '5',
    name: 'George Russell',
    number: 63,
    team: 'Mercedes',
    nationality: 'United Kingdom',
    points: 175,
    position: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    age: 26,
    championships: 0,
    wins: 1,
    podiums: 12
  },
  {
    id: '6',
    name: 'Carlos Sainz Jr.',
    number: 55,
    team: 'Ferrari',
    nationality: 'Spain',
    points: 162,
    position: 6,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    age: 30,
    championships: 0,
    wins: 3,
    podiums: 23
  }
];

export const teams: Team[] = [
  {
    id: '1',
    name: 'Red Bull Racing',
    points: 860,
    position: 1,
    color: '#1E3A8A',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    drivers: ['Max Verstappen', 'Sergio Pérez'],
    championships: 6,
    founded: 2005
  },
  {
    id: '2',
    name: 'Mercedes',
    points: 409,
    position: 2,
    color: '#00D2BE',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    drivers: ['Lewis Hamilton', 'George Russell'],
    championships: 8,
    founded: 2010
  },
  {
    id: '3',
    name: 'Ferrari',
    points: 406,
    position: 3,
    color: '#DC143C',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    drivers: ['Charles Leclerc', 'Carlos Sainz Jr.'],
    championships: 16,
    founded: 1950
  },
  {
    id: '4',
    name: 'McLaren',
    points: 302,
    position: 4,
    color: '#FF8700',
    logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop',
    drivers: ['Lando Norris', 'Oscar Piastri'],
    championships: 8,
    founded: 1966
  }
];

export const races: Race[] = [
  {
    id: '1',
    name: 'Bahrain Grand Prix',
    country: 'Bahrain',
    date: '2024-03-02',
    circuit: 'Bahrain International Circuit',
    status: 'completed',
    round: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    winner: 'Max Verstappen',
    fastestLap: 'Charles Leclerc'
  },
  {
    id: '2',
    name: 'Saudi Arabian Grand Prix',
    country: 'Saudi Arabia',
    date: '2024-03-09',
    circuit: 'Jeddah Corniche Circuit',
    status: 'completed',
    round: 2,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    winner: 'Max Verstappen',
    fastestLap: 'Lewis Hamilton'
  },
  {
    id: '3',
    name: 'Australian Grand Prix',
    country: 'Australia',
    date: '2024-03-24',
    circuit: 'Albert Park Circuit',
    status: 'upcoming',
    round: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    name: 'Japanese Grand Prix',
    country: 'Japan',
    date: '2024-04-07',
    circuit: 'Suzuka International Racing Course',
    status: 'upcoming',
    round: 4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop'
  }
];

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'Verstappen Dominates Season Opener in Bahrain',
    summary: 'Max Verstappen secured a commanding victory at the Bahrain Grand Prix, setting the tone for another championship campaign.',
    content: 'Max Verstappen delivered a masterclass performance at the Bahrain International Circuit, leading from pole position to checkered flag in a dominant display that showcased Red Bull Racing\'s continued superiority in Formula 1.',
    author: 'F1 Editorial Team',
    publishedAt: '2024-03-02T20:30:00Z',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Race Report',
    tags: ['Bahrain GP', 'Max Verstappen', 'Red Bull Racing']
  },
  {
    id: '2',
    title: 'Mercedes Shows Promise with Upgraded Package',
    summary: 'The Silver Arrows unveiled significant aerodynamic improvements that could challenge Red Bull\'s dominance.',
    content: 'Mercedes has introduced a comprehensive upgrade package that addresses the fundamental issues that plagued their 2023 campaign, with early testing showing promising signs of improved pace and handling characteristics.',
    author: 'Technical Analysis Team',
    publishedAt: '2024-03-01T14:15:00Z',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Technical',
    tags: ['Mercedes', 'Upgrades', 'Aerodynamics']
  },
  {
    id: '3',
    title: 'Ferrari\'s Strategic Gamble Pays Off in Practice',
    summary: 'The Scuderia\'s bold setup choices during Friday practice sessions hint at a more aggressive race strategy.',
    content: 'Ferrari has taken an unconventional approach to their car setup, prioritizing race pace over qualifying performance in a strategic move that could prove decisive in the championship battle.',
    author: 'Strategy Desk',
    publishedAt: '2024-02-29T16:45:00Z',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Strategy',
    tags: ['Ferrari', 'Strategy', 'Setup']
  }
];
