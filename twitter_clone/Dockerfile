FROM node:18.16.0-slim

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm install --legacy-peer-deps

COPY --chown=node:node ./ ./

#CMD ["tail", "-f", "/dev/null"]
#CMD ["npm", "run", "dev"]
