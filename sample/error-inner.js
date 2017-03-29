/**
 * Created by realm on 2017/3/29.
 */
console.log('here we go');
let someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    throw new Error('something wrong');
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});