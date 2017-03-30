/**
 * 演示使用 `.catch()` 捕获错误
 * Created by Meathill on 2017/3/30.
 */

console.log('here we go');

new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then( () => {
    console.log('start');
    throw new Error('test error');
  })
  .catch( err => {
    console.log('I catch: ', err);

    // 下面这一行的注释将引发不同的走向
    throw new Error('another error');
  })
  .then( () => {
    console.log('arrive here');
  })
  .then( () => {
    console.log('... and here');
  })
  .catch( err => {
    console.log('No, I catch: ', err);
  });