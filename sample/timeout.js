console.log('here we go');
new Promise( resolve => {
  setTimeout( () => {
    resolve('hello');
  }, 5000);
})
  .then( value => {
    console.log( value + ' world');
  });