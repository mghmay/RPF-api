# RPF-api

This API provides access to user endpoints. It is designed as a technical exercise and provides access to create, read and delete endpoints

## Getting started

### Prerequisites

To run this projects locally all you need is docker.

To run it in development mode, you will need to have the following software installed on your system:

- Deno
- Docker

## Installation

Clone the repository:

```bash
  git clone https://github.com/mghmay/RPF-api
```

## Running the server

### Dockerised mode

First make sure you are in the root directory: /RPF-api

Build and start the Docker container in detached mode:

```bash
  docker-compose up --build -d
```

The server should now be running on http://localhost:3000.

### Development mode

Install deno:
https://deno.com/manual@v1.33.4/getting_started/installation

Start the server in development mode:

```bash
  docker-compose -f docker-compose.dev.yml up -d
```

Start deno (allow necessary permissions and watch for changes)

```bash
   deno run --allow-net --allow-read --allow-env --allow-sys --watch  app/server.ts
```

The server should now be running on http://localhost:3000.

## API Reference

The documentation can be found here: https://documenter.getpostman.com/view/22361139/2s93m4XNiT

--
