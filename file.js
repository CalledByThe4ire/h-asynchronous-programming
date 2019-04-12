/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const touch = filepath => fs.access(filepath).catch(() => fs.writeFile(filepath));
// END
