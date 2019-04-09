import fs from 'fs';

// BEGIN (write your solution here)
export default (fileName, customData, cb) => {
  fs.writeFile(fileName, customData, (_error, data) => {
    cb(null, data);
    console.log('success');
  });
};
// END
