FROM node:18

# Create app directory
RUN mkdir -p /usr/app/stock
WORKDIR /usr/app/stock

RUN corepack enable

copy package.json .

RUN pnpm install --force

COPY . .

ENTRYPOINT ["./.docker/entrypoint.dev.sh"]
