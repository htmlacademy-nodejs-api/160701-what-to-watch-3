import { DocumentType } from '@typegoose/typegoose';
import { FilmEntity } from './film.entity.js';
import CreateFilmDto from './dto/create-film.dto.js';
import UpdateFilmDto from './dto/update-film.dto.js';

export interface FilmServiceInterface {
  create(dto: CreateFilmDto): Promise<DocumentType<FilmEntity>>;
  findById(filmID: string): Promise<DocumentType<FilmEntity> | null>;
  find(count?: number): Promise<DocumentType<FilmEntity>[]>;
  deleteById(filmID: string): Promise<DocumentType<FilmEntity> | null>;
  updateById(filmID: string, dto: UpdateFilmDto): Promise<DocumentType<FilmEntity> | null>;
  findByGenre(genre: string, count?: number): Promise<DocumentType<FilmEntity>[]>;
  incCommentCount(filmID: string): Promise<DocumentType<FilmEntity> | null>;
  // findPromo(): Promise<DocumentType<FilmEntity>>;
  findFavorite(): Promise<DocumentType<FilmEntity>[]>;
  changeFavorite(filmId: string, status: number): Promise<DocumentType<FilmEntity> | null>;
  exists(documentId: string): Promise<boolean>;
}
