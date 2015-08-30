//imports
var express = require('express'),
    load = require('express-load'),
    app = express();

/*  CONFIGURAÇÃO DOS MIDDLEWARES */
//configuracao da view
app.set('views', __dirname+'/views');
//configuracao da engine EJS
app.set('view engine', 'ejs');
//configuracao de CSS, JS e Imagens
app.use(express.static(__dirname+'/public'));

//configuração das rotas Index e resultados
load('models')
    .then('controllers')
    .then('routes')
    .into(app);

//escuta da porta 80
app.listen(80, function(){
  console.log("Sistema online! \\/_(^_^)_\\/");
});