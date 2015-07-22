"use strict";
const fs = require('fs');

fs.writeFile('testfile.txt', 'all is well', function(err) {
  if (err) {
    throw err;
  }
  console.log('File saved!');
});