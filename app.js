//imports
var express         = require('express'),
    load            = require('express-load'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    expressSession  = require('express-session'),
    mysql           = require('mysql'),
    error           = require(__dirname+'/middlewares/error'),
    app             = express();


/*  CONFIGURAÇÃO DOS MIDDLEWARES */
//configuracao da view
app.set('views', __dirname+'/views');
//configuracao da engine EJS
app.set('view engine', 'ejs');
//configuracao do cookie
app.use(cookieParser('gpjcaxias'));
//configuracao do sistema de sessão (login)
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//configuracao de CSS, JS e Imagens
app.use(express.static(__dirname+'/public'));

//MySQL Pool
global.pool = mysql.createPool({
   host             : 'localhost',
   user             : 'root',
   password         : 'root',
   database         : 'tcc'
});

/*
function handle_database(req,res){
    pool.getConnection(function(err,connection){
       if(err){
           connection.release();
           console.log('Erro conexão DB.');
           return;
       } 
        console.log('connected as id'+connection.threadId);  
    
        connection.query('selecti * from unidade',function(err,rows){
            connection.release();
            if(!err){
                console.log(rows);
            }
        });
        connection.on('eror',function(err){
           console.log('Erro conexão DB.');
           return;
        });
    });
};
*/

//configuração das rotas Index e resultados
load('models')
    .then('controllers')
    .then('routes')
    .into(app);

//middleware de tratamento de erros deve ser carregado por ultimo
app.use(error.notFound);
app.use(error.serverError);

//escuta da porta 80
app.listen(80, function(){
  console.log("Sistema online! \\/_(^_^)_\\/");
});