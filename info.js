/* eslint-disable import/prefer-default-export */
import { join } from 'path';
import { readdir, stat } from 'fs';
import { sumBy } from 'lodash';
import map from 'async/map';

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath, cb) => {
  readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map(name => join(dirpath, name));
    map(filepaths, stat, (error2, stats) => {
      cb(error2, sumBy(stats, 'size'));
    });
  });
};
// END
