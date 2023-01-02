import { Film, Genres } from '../types/film.type.js';

export const createFilm = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');

  const [
    name,
    description,
    created,
    genre,
    released,
    rating,
    previewVideoLink,
    videoLink,
    starring,
    director,
    runTime,
    posterImage,
    backgroundImage,
    backgroundColor,
    firstname,
    email,
    avatarPath,
    password,
  ] = tokens;

  return {
    name,
    backgroundImage,
    backgroundColor,
    created: new Date(created),
    videoLink,
    previewVideoLink,
    description,
    rating: Number.parseInt(rating, 10),
    director,
    starring: starring.split(','),
    runTime: Number.parseInt(runTime, 10),
    genre: genre as Genres,
    released: Number(released),
    posterImage,
    user: { firstname, email, avatarPath, password },
  } as Film;
};
