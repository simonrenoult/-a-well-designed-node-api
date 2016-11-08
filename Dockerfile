FROM node:6.6
COPY . /app
WORKDIR /app

RUN npm install
CMD ["make", "start-app"]
