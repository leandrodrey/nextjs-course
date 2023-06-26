FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

# USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]