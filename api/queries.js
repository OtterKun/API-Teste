const db = require("./postgress-config");


const listUsers = (req, res) => {
  db.pool.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  })
}

module.export = {
  listUsers
};
