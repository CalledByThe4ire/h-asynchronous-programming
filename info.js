/* eslint-disable import/prefer-default-export */
import { join } from 'path';
import { readdir, stat } from 'fs';
import { sumBy } from 'lodash';
import map from 'async/map';

// BEGIN (write your solution here)
export const getDirectorySize = (dirPath, cb) => {
  readdir(dirPath, (readError, filenames) => {
    if (readError) {
      cb(readError);
      return;
    }
    const paths = filenames.map(file => join(dirPath, file));
    map(paths, stat, (statsError, result) => {
      if (statsError) {
        cb(statsError);
      }
      cb(null, sumBy(result, 'size'));
    });
  });
};
// END
