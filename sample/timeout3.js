console.log('here we go');
new Promise( resolve => {
  setTimeout( () => {
    resolve('hello');
  }, 2000);
})
  .then( value => {
    console.log(value);
    console.log('everyone');
    (function () {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('Mr.Laurence');
          resolve('Merry Xmas');
        }, 2000);
      });
    }());
    return false;
  })
  .then( value => {
    console.log( value + ' world');
  });