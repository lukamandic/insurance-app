FROM node:14.17.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .
Expose 7000

CMD ["npm", "start"]