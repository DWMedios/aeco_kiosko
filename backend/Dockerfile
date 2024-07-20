FROM node:20.15-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3333
CMD ["npm", "start"]