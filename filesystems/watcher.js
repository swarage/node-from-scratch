const 
  fs = require('fs');


fs.watchFile('testfile.txt', function() {
  console.log('the file was changed!');
});

console.log('now watching testfile.txt for changes...');