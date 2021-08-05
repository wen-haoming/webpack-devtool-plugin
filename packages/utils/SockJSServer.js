const http = require('http');
const sockjs = require('sockjs');

class SockJSServer {
  constructor() {
    this.server = sockjs.createServer({
      log() {},
    });
  }
}

module.exports = SockJSServer;
