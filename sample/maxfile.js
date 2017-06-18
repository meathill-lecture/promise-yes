/**
 * Created by realm on 2017/4/17.
 *
 * @see https://medium.com/@wavded/managing-node-js-callback-hell-1fe03ba8baf
 */

const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err); // [1]
    let count = files.length; // [2]
    let errored = false;
    let stats = [];
    files.forEach( file => {
      fs.stat(path.join(dir, file), (err, stat) => {
        if (errored) return; // [1]
        if (err) {
          errored = true;
          return callback(err);
        }
        stats.push(stat); // [2]

        if (--count === 0) {
          let largest = stats
            .filter(function (stat) { return stat.isFile(); })
            .reduce(function (prev, next) {
              if (prev.size > next.size) return prev;
              return next;
            });
          callback(null, files[stats.indexOf(largest)]);
        }
      });
    });
  });
}

findLargest('./path/to/dir', function (err, filename) {
  if (err) return console.error(err);
  console.log('largest file was:', filename);
});