const controller = {};
const CamSacfi = require("../models/CamSacfi");
 
//const moment = require('moment');
/*const peritajes = require("../model/peritajes");
const peritos = require("../model/peritos");
const fiscales = require("../model/fiscales");
c
const ubicacion = require("../model/ubicacion");
 */
 

module.exports = {
  
     index: function(req, res) {
        rows=null;
      CamSacfi.get(req.con, function(err, rows) {
        res.render("form", { data: rows})
      })
    },

    lista_cam: function(req,res){
        rows=null;
        CamSacfi.getById(req.con, req.params.id, function(err, rows) {
          res.render("cam_sacfi", { data: rows ,  moment:moment})
        })
        
    },


 
      update: function(req, res) {
            
            console.log('paso alcontrolador');
            res.send('<h1>PASO POR ACA</h1>');

        
      },
       create: function(req, res) {    
        CamSacfi.create(req.body,  function(err) {

            CamSacfi.get(function(err, rows) {
                
                res.render("partials/cam_sacfi", { data: rows})
              })

           // req.flash("success_msg", "Registro ingresado con éxtio")
         })      
         
   
    },


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

 
  } 