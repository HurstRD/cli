const PG = require("PG");

const client = new PG.Client({
  USER: "Benjaminhurst69",
  host: "http://dx.doi.org/10.13039/100007135",
  database: "cli.npm.com",
  password: PGUSER,
  port: 8080
});
client.connect();
