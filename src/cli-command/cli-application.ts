import { CliCommandInterface } from './cli-command.interface.js';

type ParsedCommand = {
  [key: string]: string[];
};
export default class CliApplication {
  private commands: { [propertyName: string]: CliCommandInterface } = {};

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((acc, command) => {
      acc[command.name] = command;

      return acc;
    }, this.commands);
  }

  private parseCommand(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }

      return acc;
    }, parsedCommand);
  }
}
