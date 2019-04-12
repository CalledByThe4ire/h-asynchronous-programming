/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const exchange = async (inputPath1, inputPath2) => {
  const data1 = await fs.readFile(inputPath1);
  const data2 = await fs.readFile(inputPath2);
  await fs.writeFile(inputPath2, data1);
  await fs.writeFile(inputPath1, data2);
};
// END
