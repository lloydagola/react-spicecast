FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 4000

RUN chown -R node usr/src/app/node_modules

USER node

CMD ["npm", "start"]
