/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const exchange = async (filepath1, filepath2) => {
  const data1 = await fs.readFile(filepath1);
  const data2 = await fs.readFile(filepath2);
  await fs.writeFile(filepath1, data2);
  await fs.writeFile(filepath2, data1);
// END
