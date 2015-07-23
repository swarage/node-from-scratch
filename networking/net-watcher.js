"use strict";
const 
  fs = require('fs'),
  net = require('net'),

  filename = process.argv[2],

  server = net.createServer(function(connection) {
    console.log('Subscriber connected');
    connection.write(JSON.stringify({
      type: 'watch',
      file: filename
    }) + '\n');

    let watcher = fs.watch(filename, function() {
      connection.write(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
      }) + '\n');
    });

    connection.on('close', function() {
      console.log('Subscriber disconnected');
      watcher.close();
    })

  });

if (!filename) {
  throw Error('you must pass a filename as an argument!');
}

server.listen(5432, function() {
  console.log('Listening for subscribers...');
})
