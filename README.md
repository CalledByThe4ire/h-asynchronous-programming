Это упражнение вы уже делали, но теперь тоже самое нужно сделать с помощью промисов

### info.js

Реализуйте и экспортируйте функцию `getDirectorySize`, которая считает размер переданной директории (не включая поддиректории).

```
import { getDirectorySize } from './info';

getDirectorySize('/usr/local/bin').then(console.log);

```

### Подсказка

-   [fs.readdir](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) - чтение содержимого директории
-   [path.join](https://nodejs.org/api/path.html#path_path_join_paths) - конструирует пути
-   [fs.stat](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options) - информация о файле
-   [_.sumBy](https://lodash.com/docs/4.17.11#sumBy) - нахождение суммы в массиве