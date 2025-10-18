FROM node:22-alpine

WORKDIR /app

COPY scripts /app

RUN apk add --no-cache curl net-tools grep

CMD ["node", "server.js"]