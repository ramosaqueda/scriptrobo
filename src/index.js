const express = require('express');
const morgan = require('morgan');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./database/db.js');



// promise


app.set('port', process.env.PORT||5000);
app.set('views', path.join(__dirname,'views'))
 
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))

  app.set('view engine', '.hbs');

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//VAriables globales
app.use((req,res,next)=>{
    next();
})
//Rutas
app.use(require('./routes/'));
app.use('links',require('./routes/links'));
//archivos publicos
 
app.use(express.static(path.join(__dirname, 'public')));




//start server
app.listen(app.get('port'), () => {
  console.log('server corriendo en el puerto ', app.get('port'))  
 
});
 