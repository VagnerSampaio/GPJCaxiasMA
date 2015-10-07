module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'), 
	relatoriogeral = app.controllers.relatoriogeral;
	// rota /relatoriogeral recebe action index controller relatoriogeral
	app.get('/relatoriogeral', autenticar, relatoriogeral.index);
};

