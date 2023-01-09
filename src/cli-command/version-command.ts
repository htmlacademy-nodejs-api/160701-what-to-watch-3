import { CliCommandInterface } from './cli-command.interface.js';
import { readFileSync } from 'node:fs';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const contentJson = readFileSync('./package.json', 'utf-8');
    const content = JSON.parse(contentJson);
    return content.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(version);
  }
}
