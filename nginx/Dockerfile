FROM nginx:1.15.0-alpine

RUN apk update && apk add wget

RUN wget -O /usr/local/bin/dockerize https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf /usr/local/bin/dockerize \
    && chmod +x /usr/local/bin/dockerize

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
