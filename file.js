/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const reverse = filepath => fs.readFile(filepath, 'utf-8')
  .then(data => fs.writeFile(filepath, data.split('\n').reverse().join('\n')));
// END
