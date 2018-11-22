const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');
const app = express();

//**** */Settings*****
/*app voy a establecerte la config "port", por el metd "SET" */
app.set('port', process.env.PORT || 3000);


//****** */MIDDLEWARE****** (funciones que se ejecutan antes de entrar alas rutas)
//permite ver en consola las peticiones
app.use(morgan('dev'));

// comprueba que la informacion esta llegando en formato json.
app.use(express.json()); 


//****** */ROUTES****** (urls del servidor)
// express manda 
app.use('/api/order', require('./routes/task.routes'));


// Static files (donde iran los archivos estaticos de la carpeta public)
app.use(express.static(path.join(__dirname, 'public')));



//******* */Starting the server****** 
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});