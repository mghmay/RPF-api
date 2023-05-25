FROM denoland/deno:alpine-1.30.1

WORKDIR /app

# Prefer not to run as root.
RUN chown -R deno /app
RUN chmod 755 /app
USER deno

COPY . .

# ENV DENO_DIR=deno-dir

RUN deno cache --unstable app/server.ts

CMD deno run --allow-net --allow-env --allow-write --allow-read --allow-sys --unstable app/server.ts