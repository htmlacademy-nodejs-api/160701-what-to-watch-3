import got from 'got';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import FilmGenerator from '../common/film-generator/film-generator.js';
import { appendFile } from 'fs/promises';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filePath, url] = parameters;
    const offerCount = Number(count);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      return console.log(`Can't fetch data from ${url}`);
    }

    const filmGeneratorString = new FilmGenerator(this.initialData);
    for (let i = 0; i < offerCount; i++) {
      await appendFile(
        filePath,
        `${filmGeneratorString.generate()}\n`,
        'utf-8',
      );
    }
    console.log(`File ${filePath} created`);
  }
}
