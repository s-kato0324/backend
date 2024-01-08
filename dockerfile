FROM node:18

WORKDIR /usr/src/app

COPY . ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start"]