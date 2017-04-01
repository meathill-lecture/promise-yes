/**
 * Created by Meathill on 2017/4/1.
 */

console.log('start');

Promise.resolve()
  .then( () => {
    console.log('Step 1');
    return Promise.resolve('Hello');
  })
  .then( value => {
    console.log(value, 'World');
    return Promise.resolve(new Promise( resolve => {
      setTimeout(() => {
        resolve('Good');
      }, 2000);
    }));
  })
  .then( value => {
    console.log(value, ' evening');
    return Promise.resolve({
      then() {
        console.log(', everyone');
      }
    })
  });