FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN ls -al

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]