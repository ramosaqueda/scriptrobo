const { Pool } = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'r1101kcn',
    database:'formulario'

});
module.exports= pool;