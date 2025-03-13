FROM node:14-alpine
WORKDIR /app/backend
COPY package.json .
RUN npm install
COPY server.js .
EXPOSE 3000
CMD ["node", "backend/server.js"]