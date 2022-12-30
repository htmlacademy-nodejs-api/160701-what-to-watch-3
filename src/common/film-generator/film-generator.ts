import { MockData } from '../../types/mock-data.type';
import { Random } from '../../utils/random.js';
import { FilmGeneratorInterface } from './film-generator.interface';

export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  generate(): string {
    const {
      names,
      descriptions,
      genres,
      previewVideoLinks,
      videoLinks,
      starrings,
      directors,
      posterImages,
      backgroundImages,
      backgroundColors,
      firstnames,
      emails,
      avatarPaths,
      passwords,
    } = this.mockData;

    const name = Random.itemFromArray(names);
    const description = Random.itemFromArray(descriptions);
    const genre = Random.itemFromArray(genres);
    const previewVideoLink = Random.itemFromArray(previewVideoLinks);
    const videoLink = Random.itemFromArray(videoLinks);
    const starring = Random.itemFromArray(starrings);
    const director = Random.itemFromArray(directors);
    const posterImage = Random.itemFromArray(posterImages);
    const backgroundImage = Random.itemFromArray(backgroundImages);
    const backgroundColor = Random.itemFromArray(backgroundColors);
    const firstname = Random.itemFromArray(firstnames);
    const email = Random.itemFromArray(emails);
    const avatarPath = Random.itemFromArray(avatarPaths);
    const password = Random.itemFromArray(passwords);
    const runTime = Random.int(30, 150);
    const released = Random.int(1950, 2023);
    const rating = Random.int(0, 10);
    const created = new Date().toISOString();

    return [
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
    ].join('\t');
  }
}
