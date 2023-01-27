FROM node:14.17.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
Expose 5173

CMD ["npm", "run", "dev"]