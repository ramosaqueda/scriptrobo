const express = require('express');
const router = express.Router();
router.get('/',(req,res) =>{
    res.render('form');
});

module.exports =router

 
 
/*router.get("/", peritajesController.index)
router.get('/view/:id',peritajesController.edit);
router.get('/edit/:id', peritajesController.edit);
router.post('/update/:id', peritajesController.update);  
router.get('/create/',peritajesController.create);
router.post('/add/',peritajesController.add);

//router.get('/delete/:id',peritasjeController.delete);
//router.get('/view/:id',peritajesController.view);
*/
 