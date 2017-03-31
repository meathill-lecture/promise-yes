/**
 * Created by Meathill on 2017/3/31.
 */

const fs = require('fs');
const path = require('path');
const FileSystem = require('./FileSystem');

function findLargest(dir) {
  return FileSystem.readDir(dir, 'utf-8')
    .then( files => {
      return Promise.all( files.map( file => {
        return new Promise(resolve => {
          fs.stat(path.join(dir, file), (err, stat) => {
            if (err) throw err;
            if (stat.isDirectory()) {
              return resolve({
                size: 0
              });
            }
            stat.file = file;
            resolve(stat);
          });
        });
      }));
    })
    .then( stats => {
      let biggest = stats.reduce( (memo, stat) => {
        if (memo.size < stat.size) {
          return stat;
        }
        return memo;
      });
      return biggest.file;
    })
    .catch(console.log.bind(console));
}

findLargest('some/path/')
  .then( file => {
    console.log(file);
  })
  .catch( err => {
    console.log(err);
  });