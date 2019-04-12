import _ from 'lodash';
import path from 'path';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export default async inputPath => {
  const inputStat = await fs.stat(inputPath);

  if (!inputStat.isFile()) {
    const fileNames = await fs.readdir(inputPath);
    const statistics = await Promise.all(
      fileNames.map(async fileName => {
        const filepath = path.join(inputPath, fileName);
        const { mode } = await fs.stat(filepath);
        return {
          filepath,
          mode
        };
      })
    );
    return _.sortBy(statistics, 'filepath');
  }
  return [{ filepath: inputPath, mode: inputStat.mode }];
};
// END
