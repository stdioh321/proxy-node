const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  rule: require('./rules'),
  webInterface: {
    enable: true,
    webPort: 8002
  },
  throttle: 10000,
  forceProxyHttps: true,
  wsIntercept: false,
  silent: true
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { 
    // console.log("Here");
});
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
proxyServer.close();