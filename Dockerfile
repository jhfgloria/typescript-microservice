FROM node:12.16.3
WORKDIR /usr/src/app
COPY . ./
RUN npm install && npm run compile
CMD [ "node", "dist/index.js" ]