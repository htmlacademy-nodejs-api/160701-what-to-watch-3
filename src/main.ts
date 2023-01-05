import Application from './app/application.js';
import ConfigService from './common/config/config.service.js';
import LoggerServise from './common/logger/logger.service.js';

const logger = new LoggerServise();
const config = new ConfigService(logger);

const application = new Application(logger, config);
application.init();
