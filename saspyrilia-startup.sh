#!/usr/bin/env bash

WORKDIR="app"

# docker run
docker run --rm \
           --name saspyrilia \
           -d \
           -p 3000:3000 \
           -p 35729:35729 \
           --mount "type=bind,src=${PWD}/blog,dst=/app/blog" \
           --mount "type=bind,src=${PWD}/docs,dst=/app/docs" \
           --mount "type=bind,src=${PWD}/src,dst=/app/src" \
           --mount "type=bind,src=${PWD}/static,dst=/app/static" \
           --mount "type=bind,src=${PWD}/docusaurus.config.js,dst=/app/docusaurus.config.js" \
           --mount "type=bind,src=${PWD}/sidebars.js,dst=/app/sidebars.js" \
           --mount "type=bind,src=${PWD}/yarn.lock,dst=/app/yarn.lock" \
           saspyrilia

# pause so that the app can start
sleep 5

# open browser
xdg-open http://localhost:3000
