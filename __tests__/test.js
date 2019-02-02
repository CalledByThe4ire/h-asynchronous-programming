import path from 'path';
import os from 'os';
import fs from 'fs';
import { move } from '../file';

test('move1', (done) => {
  move('/undefined', '/undefined', (error) => {
    expect(error).not.toBeNull();
    done();
  });
});

test('move2', (done) => {
  move('/etc/passwd', '/undefined', (error) => {
    expect(error).not.toBeNull();
    done();
  });
});

test('move3', (done) => {
  const dirname = fs.mkdtempSync(path.join(os.tmpdir(), 'hexlet-'));
  const from = path.join(dirname, 'source');
  fs.writeFileSync(from, 'haha');
  const to = path.join(dirname, 'dest');
  move(from, to, (error) => {
    expect(error).toBeNull();
    const exists1 = fs.existsSync(from);
    expect(exists1).toBe(false);
    const exists2 = fs.existsSync(to);
    expect(exists2).toBe(true);
    done();
  });
});
