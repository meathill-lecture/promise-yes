# Promise? <br>Promise.

<!-- page -->

> The Promise object is used for asynchronous computations.

> A Promise represents a value which may be available now, or in the future, or never.

> --[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<!-- section -->

> Promise 对象用于异步计算。

> 一个 Promise 表示一个现在、将来或永不可能可用的值。

<!-- fragment -->
![扶额](./img/fue.jpg)

<!-- page -->

Promise 对象

* 用于异步计算。
* 它代表一个值，
* 这个值可能现在就可以用；
* 也可能将来才可以用（正在加载）;
* 甚至永远不会存在（但不耽误我们写别的）。

<!-- page -->

## 为什么会有 Promise？

1. JavaScript 为检查表单而生
2. 接下来它可以操作 DOM
3. JS 的操作大多是异步的
4. 无阻塞成为 JS 的特色

Note:
3. (作为一门 UI 语言，界面冻结是大忌)

<!-- section -->

终于，开发者们踏入“回调地狱”。

![callback hell](./img/callback-hell.jpg)

<!-- page -->

假设需求：

遍历目录，找出包含关键词的文件，将其中包含关键词的一行取出来，放在另一个文件里，并返回所有文件的文件名。

<!-- section -->
```javascript
function search(dir, keyword, callback) {
  fs.readdir(dir, function (err, files) { // [1]
    if (err) return callback(err);
    var errored = false;
    var results = [];
    files.forEach(function (file, index) { // [2]
      fs.stat(path.join(dir, file), function (err, stat) { // [3]
        if (errored) return;
        if (err) {
          errored = true;
          return callback(err);
        }
        if (stat.isDirectory()) {
          return;
        }
        fs.readFile(path.join(dir, file), 'utf8', function (err, content) {
                    // [4]
          if (err) {
            errored = true;
            return callback(err);
          }
          if (content.indexOf(keyword) === -1) {
            return;
          }
          var lines = content.match(/.*keyword.*/g);
          fs.writeFile(path.join(dir, file + '.result'),
                        lines.join('\s'), 'utf8', function (err) { // [5]
            if (err) {
              errored = true;
              return callback(err);
            }
            results.push(file);
          });
        });
      });
    });
    callback(results);
  });
}

search('some/path/', 'meathill', function (err, files) {
  if (err) throw err;
  console.log(files);
});
```

<!-- page -->

回调有三个问题：

1. 嵌套层次很深，难以维护
2. 无法使用 `return` 和 `throw`
3. 无法正常检索堆栈信息

<!-- page -->

社区经过长时间探索，最终得出：

## Promise

1. 可以很好的解决回调嵌套问题
2. 代码阅读体验很好
3. 不需要增加新的语法

<!-- page -->

## Promise 详解

<!-- section -->

```javascript
new Promise(
  function (resolve, reject) {
    // 一段耗时很长的异步操作
    // 数据处理完成
    resolve();

    // 数据处理出错
    reject();
  }
)
  .then( function () {
    // 成功，下一步
  }, function () {
    // 失败，处理
  });
```

Note:
正所谓“我不入地狱谁入地狱”，Promise 正是用回调解决了回调……

<!-- section -->

1. Promise 是一个 **代理对象**，它和原先的操作并无关系。
2. Promise 有3个状态：
    1. `pending` 初始状态
    2. `fulfilled` 操作成功
    3. `rejected` 操作失败
3. Promise 状态发生改变的时候，就会执行 `.then()` 里的回调

<!-- page -->

接下来，我们由易到难，讲授如何使用 Promise。

<!-- section -->

### 定时执行

<!-- ./sample/timeout.js -->

<!-- section -->

### 远程加载

jQuery 已经实现了 Promise。参见 [jqXHR](http://api.jquery.com/jQuery.ajax/#jqXHR)

```javascript
$.ajax(url, {
  dataType: 'json'
})
  .then(json => {
    // 该干啥干啥
  });
```

<!-- section -->

### 读取本地文件

<!-- section -->

我们来用 Promise 改造一下前面的例子。

<!-- section -->

```javascript
function search(dir, keyword, callback) {
  return new Promise( resolve => {
    fs.readdir(dir, function (err, files) {
      if (err) throw err;
      resolve(files);
    })
  })
    .then( files => {
      return Promise.all( files.map( file => {
        return new Promise(resolve => {
          fs.stat(path.join(dir, file), function (err, stat) {
            if (err) throw err;
            if (stat.isDirectory()) {
              throw new Error('Not File');
            }
            resolve(stat);
          });
        })
          .then( stat => {
            return new Promise(resolve => {
              fs.readFile(path.join(dir, file), 'utf8', function (err, content) {
                if (err) throw err;
                if (content.indexOf(keyword) === -1) {
                  throw new Error('No keyword');
                }
                resolve(content);
              });
            });
          })
          .catch( err => {
            if (err.message === 'Not File') {
              return;
            }
            throw err;
          })
          .then( content => {
            return new Promise(resolve => {
              var lines = content.match(/.*keyword.*/g);
              fs.writeFile(path.join(dir, file + '.result'),
                          lines.join('\s'), 'utf8', function (err) { // [5]
                if (err) throw err;
                resolve(file);
              });
            });
          })
          .catch( err => {
            if (err.message === 'No keyword') {
              return;
            }
            throw err;
          });
        });
      });
    });
}

search('some/path/', 'meathill')
  .then( files => {
    console.log(files);
  })
  .catch( err => {
    console.log(err);
  });
```

<!-- page -->

### Promise 的支持情况

![caniuse](./img/caniuse.jpg)

放手用吧，少年！