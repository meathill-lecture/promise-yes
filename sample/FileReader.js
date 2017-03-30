/**
 * 使用 JS 包装 readFile
 * Created by Meathill on 2017/3/30.
 */

const fs = require('fs');

module.exports = {
  read: function (path, options) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, options, (err, content) => {
        if (err) {
          return reject(err);
        }
        resolve(content);
      });
    });
  }
};