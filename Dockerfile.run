FROM node:alpine

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

EXPOSE 3000 35729

CMD ["yarn", "start", "--host", "0.0.0.0"]
