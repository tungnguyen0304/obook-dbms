FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm install nodemon -g

RUN npm install -g ts-node

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start" ]