const http = require('http');
const sockjs = require('sockjs');

class SockJSServer {
  constructor(options = {}) {
    const {
      sockjs_url = '/__dev_server__/sockjs.bundle.js',
      port = 9999,
      hostname = '0.0.0.0',
    } = options;
    this.implementation = sockjs.createServer({
      sockjs_url,
      log() {},
    });

    this.clients = new Set();

    this.implementation.on('connection', (client) => {
      console.log('建立连接----');
      console.log(this.clients.size);
      client.on('data', function (message) {
        client.write(message);
        console.log('sockjs - ', message);
      });
      client.on('close', function () {});
      this.clients.add(client);
    });

    this.implementation.close = () => {
      for (const client of this.clients) {
        client.close();
      }
      this.clients.clear();
    };

    const httpServer = http.createServer();

    this.implementation.installHandlers(httpServer, { prefix: '/echo' });

    httpServer.listen(port, hostname);
  }
  close() {
    for (const client of this.clients) {
      client.close();
    }
    this.clients.clear();
  }
}

new SockJSServer();

module.exports = SockJSServer;
