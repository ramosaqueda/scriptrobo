 
const CamSacfiCtrl = {};
const CamSacfi = require("../models/CamSacfi");
 
const pool = require('../database');
 
//const moment = require('moment');
/*const peritajes = require("../model/peritajes");
const peritos = require("../model/peritos");
const fiscales = require("../model/fiscales");
c
const ubicacion = require("../model/ubicacion");
 */
 

 
  
  CamSacfiCtrl.index =async (req, res) => {
      rows=null;
      CamSacfi.get(req.con, function(err, rows) {
        res.render("form", { data: rows})
      })
    }

  

    CamSacfiCtrl.lista_cam = async (req, res) => {
     
      const camsacfi = await pool.query('SELECT * FROM "public"."frrobos_camSacfi" WHERE camsacfi_id = ?', [req.id]);
      res.render('partials', { camsacfi });
  }
       
  CamSacfiCtrl.create=async (req, res) => {
        CamSacfi.create(req.body,  function(err) {

            CamSacfi.get(function(err, rows) {
                res.render("partials/cam_sacfi", { 
                  data: rows,
                  messaje: 'hola'
                })
              })

           // req.flash("success_msg", "Registro ingresado con éxtio")
         })      
         
   
    }


    /*add: function(req, res) {
        peritajes.create(req.con, req.body,  function(err) {
            let id = 1;
            if(err){
                req.flash("error_msg", "Error de ingreso en Base de datos: "+err);
                res.redirect("/peritajes/create");
             
            }else{
                req.flash("success_msg", "Registro ingresado con éxtio");
                res.redirect("/peritajes/create");
            }         
        })
    
  } 
  */

 
 
module.exports = CamSacfiCtrl;