FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

RUN wget -O /usr/local/bin/dockerize https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf /usr/local/bin/dockerize \
    && chmod +x /usr/local/bin/dockerize

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
