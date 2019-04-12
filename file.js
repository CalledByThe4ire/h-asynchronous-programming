/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath) => fs.readdir(dirpath)
  .then(filenames => {
    const filepaths = filenames.map(filename => path.join(dirpath, filename));
    return Promise.all(filepaths.map(filepath => fs.stat(filepath)));
  })
  .then(data => _.sumBy(data, 'size'));
// END
