# TypeScript microservice template 🦴

### Table of contents
- [Introduction](##introdunction)
- [Development](##development)
  - [Pre-requisites](###pre-requisites)
  - [External services](###external-services)
  - [Server](###server)
  - [Migrations](###migrations)
- [Build](##build)
  - [Pre-requisites](###pre-requisites)
- [Linting](##linting)

## Introduction
This repository is meant for people who want to quickly start a microrservice/API in TypeScript. It already gives you an opinionated stack and architecture that you can leverage for a quick start, or change by yourself. Theres is no convention over configuration tricks and all folders are renamable and optional. Only the migrations folder and `database.json` file should be kept intact (unless you want a different database configuration).

### Stack
There is a set of technologies selected upfront for you in order to facilitate the kickstart of a fresh new project.

- **Database**: the repository comes with a configuration for PostgreSQL (and a tool to generate SQL migrations). Also (and right now is explicitly mandatory to run it), there is a docker-compose file that runs a PostgreSQL instance (password can be found in the `docker-compose.yml` file), so there is no need to install PostgreSQL on your local machine to run this code in development.

- **Web**: the microservice is getting served as an Express application with support for JSON. Also, theres is support for GraphQL already, so that one can opt for a REST or GraphQL interface. In case you don't need the GraphQL part, feel free to remove its folders and Express middleware.

### Architecture
This repository comes with a traditional web-app architecture. The business-logic part is separated from the web-logic part (also graphql-logic is separated from the traditional REST-logic for decoupling and in case you want to throw away one of them).

```
- lib (business-logic)
  - models
  - repos (database-logic)
- web
  - controllers (REST-logic)
  - graphql
    - resolvers
      - queries
      - mutations
- configuration.ts (app configurations)
- index.ts (application root)
```

## Development

### Pre-requisites
In order to compile and run the application locally one may need the following software:

- Docker v19.03.8
- docker-compose v1.25.4
- node v12.16.1

### External services
The external services are docker containers that help simulate the production enviroment with tools like database, etc.

Run `docker-compose` from the root folder:
> `docker-compsose up -d`

### Server
_NOTE: Before running the server locally make sure you run the [External services](###external-services) needed for the correct behavior of the app_.

Continuously compile the application:
> `npm run compile:watch`

In a separate terminal, continuously run the application:
> `npm run develop:watch`

If everything worked correctly you can find the app running on:
> `http://localhost:3000`

### Migrations
Database migrations are created and managed by npm tool `db-migrate`. When creating/working on migrations, make sure the applicatiom is not running on watch mode. It will run migrations that are still work in progress.

Create new database migration file:
> `npx db-migrate create [verb-change-in-database|table|field]` \
example: `npx db-migrate create add-created_at-in-users-table`

Run migrations locally:

_NOTE: the app itself runs the migrations automatically on start, so this command may only be needed for experimentation reasons._
> `npx db-migrate up`

Rollback all migrations locally:
> `npx db-migrate down`

Rollback some migrations locally:
> `npx db-migrate down --count=[number of migrations to rollback]`

## Build
The repository has a Dockerfile which is ready to create docker images.

### Pre-requisites
In order to produce a docker image build one may need the following software:

- Docker v19.03.8
- docker-compose v1.25.4

Run the following to create the docker image:
> `docker build . [name]:[tag]`

## Linting
The repository comes with a very basic linting configuration (`.eslintrc.js`). Feel free to configure it at will.