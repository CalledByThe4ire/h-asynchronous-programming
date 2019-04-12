/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map(name => path.join(dirpath, name));
    const promises = filepaths.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then(stats => _.sumBy(stats, 'size'));
};
// END
