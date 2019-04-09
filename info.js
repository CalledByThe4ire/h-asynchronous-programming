/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filePath1, filePath2, cb) => {
  fs.stat(filePath1, (_error1, stat1) => {
    fs.stat(filePath2, (_error2, stat2) => {
      cb(null, Math.sign(stat1.size - stat2.size));
    });
  });
};
// END
