module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'), 
	resultados = app.controllers.resultados;
	// rota /resultados recebe o index controlado pelo resultados
	app.get('/resultados', autenticar, resultados.index);
};