/* eslint-disable no-console */

import print from '../printer';

test('readFile', (done) => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print(`${__dirname}/test.js`);
  setTimeout(() => {
    expect(results.join('')).toEqual(expect.stringContaining('readFile'));
    done();
  }, 2000);
});
