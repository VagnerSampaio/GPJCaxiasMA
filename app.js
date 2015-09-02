//imports
var express         = require('express'),
    load            = require('express-load'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    expressSession  = require('express-session'),
//    mysql           = require('mysql'),
//    connection      = require('express-myconnection'),
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

/*
app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'tcc'
    },'request')
);

//MySQL Connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'tcc'
});
connection.connect();

exports.createConnection = function createConnection(){
    var conn = connection;
    return conn;
}

//MySQL Pool
var pool = mysql.createPool({
   connectionLimit  : 100,
   host             : 'localhost',
   user             : 'root',
   password         : 'root',
   database         : 'tcc',
   debug: false 
});

function handle_database(req,res){
    pool.getConnection(function(err,connection){
       if(err){
           connection.release();
           console.log('Erro conexão DB.');
           return;
       } 
        console.log('connected as id'+connection.threadId);  
    
        connection.query('selecti * from unidade',function(err,rows){
        //'SELECT * FROM tcc.unidade u, tcc.meta m, tcc.metasunidades mu, tcc.apuracao a'+
		//'where u.idUnidade = mu.Unidade_idUnidade '+
		//'and mu.Meta_idMeta = m.idMeta '+
		//'and m.idMeta = a.Meta_idMeta '+
		//'and u.idUnidade = a.Unidade_idUnidade '+
		//'order by a.dataApuracao;'
        
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

//middleware de tratamento de erros
//deve ser carregado por ultimo
app.use(error.notFound);
app.use(error.serverError);

//escuta da porta 80
app.listen(80, function(){
  console.log("Sistema online! \\/_(^_^)_\\/");
});