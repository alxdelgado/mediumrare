FROM node:latest

WORKDIR /Users/Alex/funky-ducks/mediumrare/mediumrare

COPY ./ ./ 

RUN  npm install

CMD ["/bin/bash"]
