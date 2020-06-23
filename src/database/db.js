const { Pool } = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'r1101kcn',
    database:'formulario'

});

const getFormuario = async () =>{
  const res = await pool.query("select * from \"public\".formulario formulario");
  console.log(res.rows);
};

//const setFormulario
getFormuario();