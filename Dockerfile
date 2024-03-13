FROM docker.io/library/node:lts-alpine as build-stage

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM docker.io/library/nginx:stable-alpine-slim as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY default.conf.template /etc/nginx/templates/default.conf.template
