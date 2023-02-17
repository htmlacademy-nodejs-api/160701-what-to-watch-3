import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ConfigService from '../common/config/config.service.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import { Component } from '../types/component.types.js';
import { DatabaseInterface } from '../common/database-client/database.interface.js';
import { getUri } from '../utils/db.js';
import { CommentServiceInterface } from '../modules/comment/comment-service.interface.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigService,
    @inject(Component.DatabaseInterface) private databaseClient: DatabaseInterface,
    @inject(Component.CommentServiceInterface) private commentService: CommentServiceInterface,
  ) {}

  public async init() {
    this.logger.info('App init');
    this.logger.info(`Get value from env $PORT ${this.config.get('PORT')}`);

    const uri = getUri(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    await this.databaseClient.connect(uri);

    const comment = await this.commentService.create({
      message: 'Lorem my',
      rating: 10,
      postDate: new Date(),
      userId: '63e8a82d66e29469756b99c7',
      filmId: '63e8a82e66e29469756b99ca',
    });

    console.log(comment);
  }
}
