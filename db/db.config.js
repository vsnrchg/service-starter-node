const pg = require('pg');

const config = {
  user: 'postgres', //this is the db user credential
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});


const createTables = () => {
  const paymentTable = `CREATE TABLE IF NOT EXISTS
      payments(
        id SERIAL PRIMARY KEY,
        amount INT NOT NULL,
        beneficiary JSONB NOT NULL,
        payee JSONB NOT NULL
      )`;
  pool.query(paymentTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');