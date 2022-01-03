FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV AD_SERVICE_ADDR "http://localhost:8082"

EXPOSE 8081
CMD [ "node", "server.js" ]