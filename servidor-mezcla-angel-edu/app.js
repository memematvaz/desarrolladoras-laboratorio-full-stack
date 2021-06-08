//Importación de dependencias
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

//se definen las rutas de la aplicación
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Creación de la aplicacion
var app = express();

//Se configura el módulo para generar un log de las peticiones que recibe el servidor y verlas por la consola
app.use(logger('dev'));
//Se configura un middleware para que traduzca todas las peticiones de tipo JSON para facilitar su tratamiento.
app.use(express.json());


//middleware para decodificar el contenido de los parámetros que vengan codificados en las peticiones
// ESTO ANGEL LO TENÍA EN FALSE PERO EDU LO PONE EN TRUE
// Extended es una opcion del body parser y es para que todo 
app.use(express.urlencoded({ extended: true }));
//módulo para facilitar el tratamiento de cookies
app.use(cookieParser());
//módulo para facilitar el tratamiento de los recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//cors
app.use(cors())






//se definen las rutas de la aplicación
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


//se exporta la aplicación para que pueda ser utilizada desde otros ficheros que incluyan app.js
module.exports = app;



//TODO LO DE LAS CORS SEGUIDO
app.use(cors())
   .use(express.urlencoded({extended:true}))
   .use(express.json())
   .listen( 5000 , ()=>{
       console.log('Iniciando server by Edu')
   })

//cosa que hace edu para escribir en el navegador pero que no se si hace falta para algo al recargar la página no va, a él si que le funciona
app.get('/', (req, res ) => {
    res.status(200).send('holi')
})