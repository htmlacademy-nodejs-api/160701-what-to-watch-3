import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rowData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rowData = readFileSync(this.filename, 'utf-8');
  }
}
