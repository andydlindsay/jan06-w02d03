const net = require('net');

const server = net.createServer();

const clients = [];

server.on('connection', (client) => {
  console.log('client connected!');

  client.setEncoding('utf-8');

  clients.push(client);
  
  client.write('Hello client! Thanks for connecting!');

  client.on('data', (data) => {
    console.log(data);
    clients.forEach((c) => {
      if (c !== client) {
        c.write(`Client message: ${data}`);
      }
    });
  });
});

server.listen(4567, () => {
  console.log('opened server on', server.address());
});
