const net = require('net');

process.stdin.resume();

const client = net.createConnection({
  host: '192.168.88.46',
  port: 4567
});

client.setEncoding('utf-8');

client.on('data', (data) => {
  console.log(data);
});

process.stdin.on('data', (data) => {
  client.write(data);
});

