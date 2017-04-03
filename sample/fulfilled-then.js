/**
 * Created by meathill on 2017/4/3.
 */

console.log('start');

let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('the promise fulfilled');
    resolve('hello, world');
  }, 1000);
});

setTimeout(() => {
  promise.then( value => {
    console.log(value);
  });
}, 3000);