import chalk from 'chalk';
import { Film } from '../types/film.type.js';

// тип для фильтра объекта по его типу и вывод его ключей
type Filter<B, C> = NonNullable<
  {
    [k in keyof B]: B[k] extends C ? k : never;
  }[keyof B]
>;

// тип объекта, где ключ - это клюю требуемого объекта, а значение - название метода chalk
type Colors<T> = {
  [Key in keyof T]+?: Filter<typeof chalk, (s: string) => any>;
};

// объект, где ключ - ключ из объекта MovieCard, а значение название метода chalk
const colors: Colors<Film> = {
  name: 'red',
  description: 'bgCyan',
  genre: 'blue',
  rating: 'bgYellow',
};

export const printObjectWithChalk = (obj: Film) => {
  // проходим по свойствам нашей карточки
  for (const [key, value] of Object.entries(obj)) {
    const toPrint = `${key}: ${value}`;

    // получаем название метода chalk
    const color = colors[key as keyof Film];
    // если мы задали для него цвет в объекте colors
    if (color) {
      // то красим его
      console.log(chalk[color](toPrint));
    } else {
      // если мы цвет не задали, просто печатаем в консоль
      console.log(toPrint);
    }
  }
};
