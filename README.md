### info.js

Реализуйте и экспортируйте функцию `touch`, которая создает файл если его не существует.

```
import { touch } from './file';

touch('/myfile').then(() => console.log('created!'));

```

### Подсказка

-   [fs.access](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode) - проверка сущестования файла