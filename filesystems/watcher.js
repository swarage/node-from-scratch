"use strict";
const 
  fs = require('fs'),
  spawn = require('child_process').spawn, 
  filename = process.argv[2];

if (!filename) {
  throw Error('you must pass a filename as an argument!');
}

fs.watchFile(filename, function() {
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log('now watching ' + filename + ' for changes...');