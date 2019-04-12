/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const move = (filePath, output) =>
  fs
    .readFile(filePath, 'utf-8')
    .then(data => fs.writeFile(output, data))
    .then(() => fs.unlink(filePath));
// END
