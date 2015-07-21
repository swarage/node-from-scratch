const 
  fs = require('fs');
  filename = process.argv[2];

if (!filename) {
  throw Error('you must pass a filename as an argument!');
}

fs.watchFile(filename, function() {
  console.log(filename + ' was changed!');
});

console.log('now watching ' + filename + ' for changes...');