/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (srcPath, destPath, cb) => {
  fs.readFile(srcPath, (_err1, data1) => {
    if (_err1) {
      cb(_err1);
      return;
    }
    fs.writeFile(destPath, data1, (_err2) => {
      if (_err2) {
        cb(_err2);
        return;
      }
      fs.unlink(srcPath, cb);
    });
  });
};
// END
