const AnyProxy = require('anyproxy');
let tmpPort = process.env.PORT || 8001;
const options = {
  port: tmpPort,
  rule: require('./rules'),
  webInterface: {
    enable: true,
    webPort: 8002
  },
  throttle: 10000,
  forceProxyHttps: true,
  wsIntercept: false,
  silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => {
  console.log("Proxy ready at port: " + tmpPort);
});
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
proxyServer.close();