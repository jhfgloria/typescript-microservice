### Table of contents
- [Development](##development)
  - [Pre-requisites](###pre-requisites)
  - [External services](###external-services)
  - [Server](###server)
  - [Migrations](###migrations)
- [Build](##build)
  - [Pre-requisites](###pre-requisites)

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
