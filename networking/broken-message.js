"use strict";
const 
  fs = require('fs'),
  net = require('net'),

  filename = process.argv[2],

  server = net.createServer(function(connection) {
    console.log('Subscriber connected');

    connection.write('{"type": "changed", "file": "test');

    let timer = setTimeout(function() {
      connection.write('file.txt", "timestamp":"1358175758495"}' + '\n');
      connection.end();
    }, 1000);

    connection.on('end', function() {
      clearTimeout(timer);
      console.log('Subscriber disconnected');
    })

  });

server.listen(5432, function() {
  console.log('Listening for subscribers...');
})
