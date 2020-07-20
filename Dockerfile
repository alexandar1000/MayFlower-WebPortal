# pull official base image
FROM node:12.18.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY mayflower-webplatform/package.json ./
COPY mayflower-webplatform/package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY mayflower-webplatform ./

# start app
CMD ["npm", "start"]