FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

#RUN npx prisma generate

USER node

WORKDIR /home/node/app