import { Container } from 'inversify';
import { Component } from '../../types/component.types.js';
import { FilmServiceInterface } from './film-service.interface.js';
import FilmService from './film.service.js';
import { FilmEntity, FilmModel } from './film.entity.js';
import { types } from '@typegoose/typegoose';

const filmContainer = new Container();

filmContainer.bind<FilmServiceInterface>(Component.FilmServiceInterface).to(FilmService);
filmContainer.bind<types.ModelType<FilmEntity>>(Component.FilmModel).toConstantValue(FilmModel);

export { filmContainer };
