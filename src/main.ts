import { Container } from 'inversify';
import 'reflect-metadata';
import { Component } from './types/component.types.js';
import Application from './app/application.js';

async function bootstrap() {
  const mainContainer = new Container();
  const application = mainContainer.get<Application>(Component.Application);

  await application.init();
}

bootstrap();
