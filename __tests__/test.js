import os from 'os';
import { promises as fs } from 'fs';
import _ from 'lodash';
import { move } from '../file';

test('move 1', () => {
  const sourcePath = `${os.tmpdir()}/from`;
  const destPath = `${os.tmpdir()}/to`;
  const content = 'content';
  const promise = fs.unlink(destPath)
    .catch(_.noop)
    .then(() => fs.writeFile(sourcePath, content))
    .then(() => move(sourcePath, destPath))
    .then(() => fs.access(destPath));
  return expect(promise).resolves.toBe();
});

test('move 2', () => {
  const sourcePath = `${os.tmpdir()}/from`;
  const destPath = `${os.tmpdir()}/to`;
  const content = 'content';
  const promise = fs.unlink(destPath)
    .catch(_.noop)
    .then(() => fs.writeFile(sourcePath, content))
    .then(() => move(sourcePath, destPath))
    .then(() => fs.access(sourcePath));
  return expect(promise).rejects.toThrow();
});
