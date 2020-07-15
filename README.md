# Anyproxy test

Testing the tool anyproxy.

## Requiriments

1. [Node + Npm](https://nodejs.org/en/download/)

## Setup
```
$ git clone https://github.com/stdioh321/proxy-node.git
$ cd proxy-node
$ npm install
```
## How to run
```
$ node proxy.js
```
* The proxy server will run at the port **8001.**
* Setup your OS proxy to use the host  and port **127.0.0.1:8001**

## Testing
```
$ curl http://superdownloads.com.br --proxy 127.0.0.0:8001
```

![Curl](./screenshots/curl.png)

## References
1. [AnyProxy](https://anyproxy.io/)
2. [Curl](https://curl.haxx.se/download.html)