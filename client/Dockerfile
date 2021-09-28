# Specify a base image
FROM node:alpine
 
WORKDIR /app
# Install depenendencies

COPY ./package.json ./

RUN npm install -g npm@7.23.0

RUN npm install

COPY ./ ./


# Default command
CMD ["npm", "start"] 