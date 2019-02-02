### info.js

Реализуйте и экспортируйте по умолчанию функцию, которая следит за изменением файл. Если файл был изменен (по отношению к предыдущей проверке), то необходимо вызвать колбек. Параметры функции:

-   Путь до файла, который нужно отслеживать
-   Период отслеживания
-   Колбек, который принимает на вход только ошибку

```
import watch from './watcher';

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);

```

Реализуйте эту логику используя функцию `setInterval`. Функция должна возвращать наружу идентификатор таймера. Если во время анализа файла (через `fs.stats`) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.

### Подсказка

-   [stats.mtime](https://nodejs.org/api/fs.html#fs_stats_mtime) - время последнего изменения
-   [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) - текущая дата
-   [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)