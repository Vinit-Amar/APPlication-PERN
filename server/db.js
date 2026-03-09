const Pool = require("pg").Pool;

const Pool = new Pool({
    user: "postgres",
    password: "Vuntu123",
    port: 5432,
    host: "localhost",
    database: "perntodo"
});
module.exports = pool;
