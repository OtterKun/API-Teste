const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teste",
  password: "ikitai",
  port: 5432,
});

module.exports = {
  pool
};
