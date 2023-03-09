FROM node:18-alpine3.16

WORKDIR /app

ENV PORT=4500
# ENV DB_URI=postgres://admin:admin@postgres:5432/db

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4500

CMD [  "npm","run","docker" ]