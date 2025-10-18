FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --production

COPY public ./public
COPY server.js vars.js ./

ENV CTF_FLAG="FLAG{$CTF_FLAG}"

EXPOSE 8080
CMD ["node", "server.js"]
