/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const reverse = filepath => fs.readFile(filepath, 'utf-8').then(data => data.split('\n').reverse().join('\n')).then(data => fs.writeFile(filepath, data));
// END
