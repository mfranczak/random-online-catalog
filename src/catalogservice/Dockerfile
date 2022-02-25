FROM node:16-alpine

RUN apk --no-cache add curl

ARG dt_cluster
ARG dt_token

RUN if [ -n "${dt_cluster}" ]; then curl -s "${dt_cluster}/api/v1/deployment/installer/agent/unix/paas-sh/latest?Api-Token=${dt_token}&arch=x86&flavor=musl" -o /tmp/installer.sh && sh /tmp/installer.sh /home ; fi
# RUN if [ -n "${dt_cluster}" ]; then export LD_PRELOAD=/home/dynatrace/oneagent/agent/lib64/liboneagentproc.so; fi

ENV LD_PRELOAD /home/dynatrace/oneagent/agent/lib64/liboneagentproc.so


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

ENV SQL_ADDR="none"

EXPOSE 8088
CMD [ "node", "server.js" ]