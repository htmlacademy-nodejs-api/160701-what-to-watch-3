import { User } from './user.type';

export type Genres =
  | 'comedy'
  | 'crime'
  | 'documentary'
  | 'drama'
  | 'horror'
  | 'family'
  | 'romance'
  | 'scifi'
  | 'thriller';

export type Film = {
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: Genres;
  created: Date;
  released: number;
  user: User;
};
