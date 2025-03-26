# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app
COPY . .


# [optional] tests & build
RUN bun run install
RUN bun run build
ENV NODE_ENV=production

# run the app
USER bun
EXPOSE 3000/tcp
EXPOSE 3000/udp
ENV HOST=0.0.0.0
WORKDIR /usr/src/app/examples/bun/websocket
ENTRYPOINT [ "bun", "run", "start" ]