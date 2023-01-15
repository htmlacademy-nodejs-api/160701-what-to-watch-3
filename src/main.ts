import { Container } from 'inversify';
import 'reflect-metadata';
import { Component } from './types/component.types.js';
import Application from './app/application.js';
import { applicationContainer } from './app/application.container.js';

const mainContainer = Container.merge(applicationContainer);

async function bootstrap() {
  const application = mainContainer.get<Application>(Component.Application);
  await application.init();
}

bootstrap();
