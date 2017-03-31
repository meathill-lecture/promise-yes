/**
 * 使用 JS 包装 readFile
 * Created by Meathill on 2017/3/30.
 */

const fs = require('fs');

module.exports = {
  readDir: function (path, options) {
    return new Promise( resolve => {
      fs.readdir(path, options, (err, files) => {
        if (err) {
          throw err;
        }
        resolve(files);
      });
    });
  },
  readFile: function (path, options) {
    return new Promise( resolve => {
      fs.readFile(path, options, (err, content) => {
        if (err) {
          throw err;
        }
        resolve(content);
      });
    });
  }
};