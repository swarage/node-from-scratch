"use strict";
const
  net = require('net'),
  client = net.connect({port: 5432});

client.on('data', function(data) {
  let message = JSON.parse(data);
  if (message.type === 'watch') {
    console.log('Now watching ' + message.file);
  } else if (message.type === 'changed') {
    console.log(message.file + ' has changed at ' + message.timestamp);
  } else {
    throw Error('unknown message type ' + message.type);
  }
});