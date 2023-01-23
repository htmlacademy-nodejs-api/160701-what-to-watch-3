import { config } from 'dotenv';
import { ConfigInterface } from './config.interface.js';
import { LoggerInterface } from '../logger/logger.interface.js';
import { ConfigSchema, configSchema } from './config.schema.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/component.types.js';

@injectable()
export default class ConfigService implements ConfigInterface {
  private config: ConfigSchema;

  constructor(@inject(Component.LoggerInterface) private logger: LoggerInterface) {
    this.logger = logger;

    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error('Can\'t read .env file.');
    }

    configSchema.load({});
    configSchema.validate({ allowed: 'strict', output: this.logger.info });
    this.config = configSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}
