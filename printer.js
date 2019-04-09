import fs from 'fs';

// BEGIN (write your solution here)
export default (filePath) => {
  return fs.readFile(filePath, 'utf-8', (error, data) => console.log(data));
};
// END
