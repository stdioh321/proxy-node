FROM alpine:latest


ADD . /app

WORKDIR /app

EXPOSE 3000

USER root

RUN apk add --update nodejs npm \
    && npm install

CMD node proxy.js    