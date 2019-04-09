/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (from, to, cb) => {
  fs.readFile(from, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(to, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(from, cb);
    });
  });
};
// END
