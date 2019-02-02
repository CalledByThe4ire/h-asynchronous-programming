import { promises as fs } from 'fs';
import { reverse } from '../file';

const reverseLines = data => data.split('\n').reverse().join('\n');

test('reverse 1', () => {
  const content = 'one\ntwo';
  const filepath = '/tmp/example';
  const promise = fs.writeFile(filepath, content)
    .then(() => reverse(filepath))
    .then(() => fs.readFile(filepath, 'utf-8'));
  return expect(promise).resolves.toBe(reverseLines(content));
});
