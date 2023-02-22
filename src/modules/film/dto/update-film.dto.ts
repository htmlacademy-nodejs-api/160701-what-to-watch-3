import { Genres } from '../../../types/film.type.js';

export default class UpdateFilmDto {
  public name?: string;
  public posterImage?: string;
  public backgroundImage?: string;
  public backgroundColor?: string;
  public videoLink?: string;
  public previewVideoLink?: string;
  public description?: string;
  public rating?: number;
  public director?: string;
  public starring?: string[];
  public runTime?: number;
  public genre?: Genres;
  public created?: Date;
  public released?: number;
}
