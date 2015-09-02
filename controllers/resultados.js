module.exports = function(app){
	/*
	app.getConnection(function(err,connection){
		connection.query('SELECT * FROM tcc.unidade u, tcc.meta m, tcc.metasunidades mu, tcc.apuracao a'+
			'where u.idUnidade = mu.Unidade_idUnidade '+
			'and mu.Meta_idMeta = m.idMeta '+
			'and m.idMeta = a.Meta_idMeta '+
			'and u.idUnidade = a.Unidade_idUnidade '+
			'order by a.dataApuracao;',function(err,rows){
			if(err){
				console.log("Erro BD: "+err);
			} else {
				
			}
		})
	});
	*/
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