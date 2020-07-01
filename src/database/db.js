const { Pool } = require('pg');
const { promisify }= require('util');


const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'r1101kcn',
    database:'formulario'

});
pool.query = promisify(pool.query);
module.exports= pool;