setTimeout(function() {
  console.log('starting the first task');
  setTimeout(function() {
    console.log('starting the second task');
    setTimeout(function() {
      console.log('starting the third task');
    }, 1000);
  }, 1000);
}, 1000);



