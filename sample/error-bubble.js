/**
 * 测试错误冒泡
 * Created by Meathill on 2017/3/30.
 */
let someAsyncThing = function () {
  return new Promise(function (resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

console.log('still work');