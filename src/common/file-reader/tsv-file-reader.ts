import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Film } from '../../types/film.type.js';
import { Genres } from '../../types/film.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rowData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rowData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Film[] {
    if (!this.rowData) {
      return [];
    }
    return this.rowData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          name,
          description,
          released,
          genre,
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
        ]) => ({
          name,
          posterImage,
          backgroundImage,
          backgroundColor,
          videoLink,
          previewVideoLink,
          description,
          rating: Number.parseInt(rating, 10),
          director,
          starring: starring.split(','),
          runTime: Number.parseInt(runTime, 10),
          genre: genre as Genres,
          released: new Date(released),
          user: { firstname, email, avatarPath, password },
        })
      );
  }
}
