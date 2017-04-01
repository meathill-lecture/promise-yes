/**
 * 使用 `Promise.all()` 包装多个 Promise 实例
 * Created by Meathill on 2017/3/30.
 */

console.log('here we go');
Promise.all([1, 2, 3])
  .then( all => {
    console.log('1: ', all);
    return Promise.all([ function () {
      console.log('xxoo');
    }, 'xxoo', false]);
  })
  .then( all => {
    console.log('2: ', all);
    let p1 = new Promise( resolve => {
      setTimeout(() => {
        resolve('I\'m P1');
      }, 1500);
    });
    let p2 = new Promise( resolve => {
      setTimeout(() => {
        resolve('I\'m P2');
      }, 1450)
    });
    return Promise.all([p1, p2]);
  })
  .then( all => {
    console.log('3: ', all);
    let p1 = new Promise( resolve => {
      setTimeout(() => {
        resolve('I\'m P1');
      }, 1500);
    });
    let p2 = new Promise( (resolve, reject) => {
      setTimeout(() => {
        reject('I\'m P2');
      }, 1000);
    });
    let p3 = new Promise( (resolve , reject) => {
      setTimeout(() => {
        reject('I\'m P3');
      }, 1600);
    });
    return Promise.all([p1, p2, p3]);
  })
  .then( all => {
    console.log('all', all);
  })
  .catch( err => {
    console.log('Catch: ', err);
  });