module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'), 
	sobre = app.controllers.sobre;
	// rota /relatoriogeral recebe action index controller relatoriogeral
	app.get('/sobre', autenticar, sobre.index);
};

