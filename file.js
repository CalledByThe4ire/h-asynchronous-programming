/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const move = (from, to) => fs.readFile(from, 'utf-8')
  .then(data => fs.writeFile(to, data))
  .then(() => fs.unlink(from));
// END
