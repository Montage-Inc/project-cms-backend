FROM node:6.4-slim
MAINTAINER Jason Kraus "jason@montagable.com"
RUN mkdir /opt/app
WORKDIR /opt/app
ADD ./ /opt/app
RUN npm install


EXPOSE 8000
CMD ["npm", "start"]
