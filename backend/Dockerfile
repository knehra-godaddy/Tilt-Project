FROM node:14-alpine
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json 
RUN npm install
COPY backend .
EXPOSE 3000
CMD ["node", "server.js"]