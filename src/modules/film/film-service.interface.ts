import { DocumentType } from '@typegoose/typegoose';
import { FilmEntity } from './film.entity.js';
import CreateFilmDto from './dto/create-film.dto.js';

export interface FilmServiceInterface {
  create(dto: CreateFilmDto): Promise<DocumentType<FilmEntity>>;
  findById(offerId: string): Promise<DocumentType<FilmEntity> | null>;
}
