/**
 * 使用 Promise 包装以前的回调函数
 * Created by Meathill on 2017/3/30.
 */

const fs = require('./FileSystem');

fs.readFile('../README.md', 'utf-8')
  .then(content => {
    console.log(content);
  });