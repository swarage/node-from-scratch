"use strict";
const 
  fs = require('fs'),
  net = require('net'),

  filename = process.argv[2],

  server = net.createServer(function(connection) {
    console.log('Subscriber connected');
    connection.write("now watching '" + filename + "' for changes...\n");

    let watcher = fs.watch(filename, function() {
      connection.write("File '" + filename + "' changed: " + Date.now() + "\n");
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
