import fs from 'fs';

// BEGIN (write your solution here)
const check = (timerId, filepath, period, cb) => {
  fs.stat(filepath, (err, stat) => {
    if (err) {
      clearInterval(timerId);
      cb(err);
      return;
    }
    if ((Date.now() - stat.mtimeMs) < period) {
      cb(null);
    }
  });
};

export default (filepath, period, cb) => {
  const timerId = setInterval(() => check(timerId, filepath, period, cb), period);
  return timerId;
};
// END
