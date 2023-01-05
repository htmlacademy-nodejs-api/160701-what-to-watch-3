import Application from './app/application.js';
import LoggerServise from './common/logger/logger.service.js';

const logger = new LoggerServise();

const application = new Application(logger);
application.init();
