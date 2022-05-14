import express from "express";
import morgan from "morgan";
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use('/auth', require('./src/routes/auth.route'));
app.use('/usuario', require('./src/routes/usuario.route'));

app.use('/embarcacion', require('./src/routes/embarcacion.route'));
app.use('/redes', require('./src/routes/redes.route'));
 
//GET home
app.get('/', (req, res) => {    
    res.send('<html><body><h1>HOME - API Rest Hack The Ocean v1</h1><br></body></html>');
})
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});