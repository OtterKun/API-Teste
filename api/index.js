const express = require("express");
const app = express();
const port = 5000;
// const query = require("./queries.js");

const db = require("./postgress-config.js")

const listUsers = (req, res) => {
  db.pool.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  })
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ta rodando essa budega')
});

app.get ('/list', listUsers);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
