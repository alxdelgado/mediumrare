FROM node:latest

WORKDIR /Users/Alex/funky-ducks/mediumrare/mediumrare/mediumrare_server

COPY package*.json ./

RUN  npm install

COPY . .

EXPOSE 8080

CMD ["/bin/bash", "npm", "start"]
