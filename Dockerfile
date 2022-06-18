FROM node:latest

WORKDIR /app/demo/demo-server

COPY . .

EXPOSE 3001

RUN npm i

CMD ["npm", "start"]
