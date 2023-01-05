import { LoggerInterface } from '../common/logger/logger.interface.js';

export default class Application {
  constructor(private logger: LoggerInterface) {
    this.logger = logger;
  }

  public async init() {
    this.logger.info('App init');
  }
}
