console.log('here we go');
new Promise( resolve => {
  setTimeout( () => {
    resolve('hello');
  }, 2500);
})
  .then( value => {
    console.log(value);
    console.log('everyone');
  })
  .then( value => {
    console.log( value + ' world');
  });