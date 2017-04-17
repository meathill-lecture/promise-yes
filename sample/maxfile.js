/**
 * Created by realm on 2017/4/17.
 */

const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err);
    let count = files.length; // [1]
    let errored = false;
    let stats = [];
    files.forEach( file => {
      fs.stat(path.join(dir, file), (err, stat) => {
        if (errored) return; // [2]
        if (err) {
          errored = true;
          return callback(err);
        }
        stats.push(stat); // [3]

        if (--count === 0) { // [4]
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