const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "test1234",
  port: 5432,
  // max: 20,
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
});

module.exports = {
  queryExecution: async function (text, values) {
    console.log("texttext",text)
    return new Promise((resolve, reject) => {
      pool.connect(function (err, client, done) {
        console.log('DB ERR', err);
        client.query(text, values, function (err, result) {
          done();
          if (err) return reject(err);
          return resolve(result.rows);
        });
      });
    });
  },
};
