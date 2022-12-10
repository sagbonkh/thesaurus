FROM node:alpine
WORKDIR '/thesaurus'

COPY package.json .
RUN npm install
COPY . . 
CMD [ "npm", "start" ]