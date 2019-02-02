import { getDirectorySize } from '../info';

test('getDirectorySize', (done) => {
  getDirectorySize('/undefined', (err) => {
    expect(err).not.toBeNull();
    done();
  });
});

test('getDirectorySize2', (done) => {
  getDirectorySize('/opt', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(0);
    done();
  });
});

test('getDirectorySize3', (done) => {
  getDirectorySize('/usr/local/bin', (err, size) => {
    expect(err).toBeNull();
    expect(size).toBe(1224);
    done();
  });
});
