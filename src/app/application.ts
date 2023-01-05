import ConfigService from '../common/config/config.service.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';

export default class Application {
  constructor(private logger: LoggerInterface, private config: ConfigService) {
    this.logger = logger;
    this.config = config;
  }

  public async init() {
    this.logger.info('App init');
    this.logger.info(`Get value from env $PORT ${this.config.get('PORT')}`);
  }
}
