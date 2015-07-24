"use strict";
const
  net = require('net'),
  ldj = require('./ldj.js'),
  netClient = net.connect({port: 5432}),
  ldjClient = ldj.connect(netClient);

ldjClient.on('message', function(message) {
  if (message.type === 'watch') {
    console.log('Now watching ' + message.file);
  } else if (message.type === 'changed') {
    console.log(message.file + ' has changed at ' + message.timestamp);
  } else {
    throw Error('unknown message type ' + message.type);
  }
});