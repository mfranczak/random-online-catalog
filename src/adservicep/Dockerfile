FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

ENV WAITING_TIME_MIN=25
ENV WAITING_TIME_MAX=250
ENV WAITING_TIME_TIMEOUT=100

EXPOSE 8081
CMD [ "node", "server.js" ]