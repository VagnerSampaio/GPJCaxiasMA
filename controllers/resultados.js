module.exports = function(app){
	var resultadosController = {
		//action: index
		index: function(req,res){
			//recebe o sessionID do login e coloca como nome da unidade
			var unidade = req.session.unidade,
				params = {unidade: unidade};
			res.render('resultados/index', params);
		},
	};
	return resultadosController;
}