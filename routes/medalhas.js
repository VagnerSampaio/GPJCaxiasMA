module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'), 
	medalhas = app.controllers.medalhas;
	// rota /medalhas recebe action index controller medalhas
	app.get('/medalhas', autenticar, medalhas.index);
};

