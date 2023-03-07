FROM node:19.6.1-alpine3.17 as builder

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
ARG ENV=production
ENV NODE_ENV=$ENV
RUN pnpm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html