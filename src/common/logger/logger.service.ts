import pino, { Logger } from 'pino';
import { LoggerInterface } from './logger.interface.js';

export default class LoggerServise implements LoggerInterface {
  private logger: Logger;

  constructor() {
    this.logger = pino();
  }

  public debug(message: string, ...arg: unknown[]): void {
    this.logger.debug(message, ...arg);
  }

  public error(message: string, ...arg: unknown[]): void {
    this.logger.error(message, ...arg);
  }

  public info(message: string, ...arg: unknown[]): void {
    this.logger.info(message, ...arg);
  }

  public warn(message: string, ...arg: unknown[]): void {
    this.logger.warn(message, ...arg);
  }
}
