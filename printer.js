import fs from 'fs';

// BEGIN (write your solution here)
export default filepath => fs.readFile(
  filepath,
  'utf-8',
  (error, data) => console.log(data),
);
// END
