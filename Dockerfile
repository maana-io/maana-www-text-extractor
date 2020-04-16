FROM openjdk:latest

RUN curl -sL https://rpm.nodesource.com/setup_13.x | bash -

RUN yum install -y nodejs

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm build

COPY . /app

CMD npm start

EXPOSE 8050