import bodyParser from "body-parser";
import express from 'express';
import morgan from "morgan";
import { Pool, PoolClient } from "pg";
import { databaseCredentials, port } from './configuration';

import helloWorldController from "./controllers/hello-world";

function startServer(pool: PoolClient): void {
  express()
    .use(bodyParser.json())
    .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
    .get('/hello-world', helloWorldController.helloWorld())
    .listen(port, () => console.log(`Listening on port ${port}`));
}

const pool = new Pool({
  host: databaseCredentials.hostname,
  port: Number(databaseCredentials.port),
  user: databaseCredentials.username,
  password: databaseCredentials.password,
  database: databaseCredentials.database,
});

const environment = process.env.NODE_ENV || "dev";
const DBMigrate = require('db-migrate');
const migrations = DBMigrate.getInstance(true, { env: environment });

migrations.registerAPIHook()
  .then(function () {
    console.log("Starting migrations");
    migrations.up()
      .then(function () {
        console.log("Finished migrations");
        pool.connect()
          .then(pool => startServer(pool))
          .catch(console.error);
      });
  });
