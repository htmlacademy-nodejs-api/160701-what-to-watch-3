import { User } from './user.type';

export enum Genres {
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  Family = 'Family',
  Romance = 'Romance',
  Scifi = 'Scifi',
  Thriller = 'Thriller',
}

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
