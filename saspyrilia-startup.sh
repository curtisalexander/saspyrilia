#!/usr/bin/env bash

# docker run
docker run -d \
           -p 3000:3000 \
           -p 35729:35729 \
           -v $(pwd)/blog:/app/blog \
           -v $(pwd)/docs:/app/docs \
           -v $(pwd)/src:/app/src \
           -v $(pwd)/static:/app/static \
           -v $(pwd)/docusaurus.config.js:/app/docusaurus.config.js \
           -v $(pwd)/sidebars.js:/app/sidebars.js \
           saspyrilia

# pause so that the app can start
sleep 5

# open browser
xdg-open http://localhost:3000