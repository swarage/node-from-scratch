"use strict";
const fs = require('fs'),
      stream = fs.createReadStream(process.argv[2]);

//NOTE IN THIS FILE WE DO NOT HANDLE THE ERROR FOR CREATING THE STREAM

stream.on('data', function(buffer) {
  process.stdout.write(buffer);
});

stream.on('error', function(err) {
  process.stdout.write('ERROR: ' + err.message + '\n');
});