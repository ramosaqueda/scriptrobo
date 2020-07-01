const express = require('express');
const moment = require('moment');
let fechoy = moment(new Date()).format("YYYY-MM-DD");

const con = require('../database/db');
 
 
module.exports = {  
    get: (callback) => {      
      con.query(`SELECT * FROM "public"."frrobos_camSacfi" LIMIT 1000 OFFSET 0
                `, callback)
    },
  
    getById: (id, callback) => {
      let qry = `SELECT * FROM "public"."frrobos_camSacfi" WHERE camsacfi_id = ${id}`;
      con.query(qry, callback)
    },


   
  
    create: function(data, callback) {
        let qry = `INSERT INTO "public"."frrobos_camSacfi"( 
                    "camsacfi_indent", 
                    "camsacfi_responsalbe", 
                    "camsacfi_dato", 
                    "frm_id") 
        
        VALUES
            (
            '${data.camsacfi_indent}',
            '${data.camsacfi_responsalbe}',
            '${data.camsacfi_dato}',
            '${data.frm_id}' 
            )`;    
        
     
        
        con.query(qry ,     callback      )
        console.log(qry);
        },
  
    update: function(con, data, id, callback) {
       
      let fecha = moment(data.fecha_pericia).format("YYYY-MM-DD");
      let qry = `UPDATE peritajes
      SET ruc_pericia = '${data.ruc_pericia}',
      fecha_pericia =   '${fecha}',
      cometido_pericia = '${data.cometido_pericia}',
      nue_pericia =   '${data.nue_pericia}',
      plazo_pericia ='${data.plazo_pericia}',       
      updated_at =   '${fechoy}',
      estado_pericua_id = '${data.estado_pericua_id}',
      fiscal_pericia_id = '${data.fiscal_pericia_id}',
      info_solicitud =   '${data.info_solicitud}',         
      obs_pericia =   '${data.obs_pericia}',
      caja_ubicacion = '${data.caja_ubicacion}',
      perito_asignado_id = '${data.perito_asignado_id}'
     WHERE
       (id = ${id})`;
        
      con.query(  qry      ,callback)    
    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM peritajes WHERE peritajes.id = ${id}`, callback)
    }
  }