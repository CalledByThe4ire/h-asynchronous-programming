import fs from 'fs';

// BEGIN (write your solution here)
export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};
// END
