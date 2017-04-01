/**
 * Created by Meathill on 2017/4/1.
 */

console.log('start');

new Promise( resolve => {
  console.log('Step 1');
  setTimeout(() => {
    resolve(100);
  }, 1000);
})
  .then( value => {
    return new Promise( resolve => {
      console.log('Step 1-1');
      setTimeout(() => {
        resolve(110);
      }, 1000);
    })
      .then( value => {
        console.log('Step 1-2');
        return value;
      })
      .then( value => {
        console.log('Step 1-3');
        return value;
      });
  })
  .then(value => {
    console.log(value);
    console.log('Step 2');
  });