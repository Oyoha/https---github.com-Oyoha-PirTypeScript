// 1)
import { readFile } from 'fs';

function promisify<T>(fn: (arg: T, callback: (error: NodeJS.ErrnoException | null, result: any) => void) => void): (arg: T) => Promise<any> {
  return function (arg: T): Promise<any> {
    return new Promise((resolve, reject) => {
      fn(arg, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const readFilePromise = promisify(readFile);
readFilePromise('./myfile.ts')
  .then(result => console.log('success reading file', result.toString()))
  .catch(error => console.error('error reading file', error));

