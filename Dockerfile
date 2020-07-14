FROM alpine:latest


ADD . /app

WORKDIR /app

EXPOSE 3000

USER root

RUN apk add --update nodejs npm

CMD node proxy.js 