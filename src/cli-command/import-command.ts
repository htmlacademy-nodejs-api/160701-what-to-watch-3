import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import { CliCommandInterface } from './cli-command.interface.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  public execute(filename: string): void {
    try {
      if (!filename || filename.trim() === '') {
        throw new Error('Не передан путь до файла');
      }

      const fileReader = new TSVFileReader(filename.trim());
      fileReader.read();

      console.log(fileReader.toArray());
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error;
      }
      console.log(
        `Не удалось импортировать данные из файла по причине: «${error.message}»`
      );
    }
  }
}
