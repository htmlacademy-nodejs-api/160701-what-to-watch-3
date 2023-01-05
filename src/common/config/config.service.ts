import { ConfigInterface } from './config.interface.js';

export default class ConfigService implements ConfigInterface {
  constructor(private config: NodeJS.ProcessEnv) {
    this.config = process.env;
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }
}
