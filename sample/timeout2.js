console.log('here we go');
new Promise( resolve => {
  setTimeout( () => {
    resolve('hello');
  }, 2500);
})
  .then( value => {
    console.log(value);
    return new Promise( resolve => {
      setTimeout( () => {
        resolve('world')
      }, 2500);
    });
  })
  .then( value => {
    console.log( value + ' world');
  });