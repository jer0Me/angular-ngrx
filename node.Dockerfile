FROM node:8

ENV PATH="/code/node_modules/.bin:${PATH}"

EXPOSE 4200

WORKDIR /code