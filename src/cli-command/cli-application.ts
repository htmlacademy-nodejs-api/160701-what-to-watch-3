import { CliCommandInterface } from './cli-command.interface.js';

export default class CliApplication {
  private commands: { [propertyName: string]: CliCommandInterface } = {};

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((acc, command) => {
      acc[command.name] = command;

      return acc;
    }, this.commands);
  }
}
