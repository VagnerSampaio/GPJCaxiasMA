module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'), 
	resultados = app.controllers.resultados;
	// rota /resultados recebe action index controller resultados
	app.get('/resultados', autenticar, resultados.index);
};

