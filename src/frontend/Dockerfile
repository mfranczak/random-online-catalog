FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

ENV PERSONALIZED_ADSERVICE_ADDR="http://localhost:8081"
ENV LEGACY_ADSERVICE_ADDR="http://localhost:8082"

EXPOSE 8080
CMD [ "node", "server.js" ]