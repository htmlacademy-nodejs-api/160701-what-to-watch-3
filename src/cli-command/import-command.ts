import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import { createFilm, getErrorMessage } from '../utils/common.js';
import { CliCommandInterface } from './cli-command.interface.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  public async execute(filename: string): Promise<void> {
    try {
      if (!filename || filename.trim() === '') {
        throw new Error('Не передан путь до файла');
      }

      const fileReader = new TSVFileReader(filename.trim());
      fileReader.on('lineread', this.onLineRead);
      fileReader.on('end', this.onComplete);

      await fileReader.read();
    } catch (error) {
      console.log(`Can't read the file: ${getErrorMessage(error)}`);
    }
  }

  private onLineRead(line: string) {
    const film = createFilm(line);
    console.log(film);
  }

  private onComplete(count: number) {
    console.log(`${count} rows imported`);
  }
}
