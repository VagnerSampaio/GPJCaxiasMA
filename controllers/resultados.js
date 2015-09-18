module.exports = function(app){
	var resultadosController = {
		//action: index
		index: function(req,res){			
			//recebe o idUnidade através do login
			pool.getConnection(function(err, connection){
				if(err){
						throw err;
				}
				
				connection.query('SELECT idUnidade, tipoUnidade, nomeUnidade, '+
				'indicador, meta, descricao, formula, sistema, esclarecimento, '+
				'total, apurado, dataApuracao '+
				'FROM unidades u, metas m, metasunidades mu '+
				'WHERE u.idUnidade = mu.fk_idUnidade '+
				'AND m.idMeta = mu.fk_idMeta '+
				'AND u.idUnidade =?', req.session.unidade, function(err,rows){
					if(err){
						throw err;
					}
					res.render('resultados/index',{
						metas: rows
					});
				});
				connection.release();
			});
		},
	};
	return resultadosController;
}

/*
pool.query('SELECT idUnidade, tipoUnidade, nomeUnidade, '+
				'indicador, meta, descricao, formula, sistema, esclarecimento, '+
				'total, apurado, dataApuracao '+
				'FROM unidades u, metas m, metasunidades mu '+
				'WHERE u.idUnidade = mu.fk_idUnidade '+
				'AND m.idMeta = mu.fk_idMeta '+
				'AND u.idUnidade =?',req.session.unidade, function(err, results, fields){
					if(err){
						throw err;
					}
					res.render('resultados/index',{
						metas: results
					});
			});
*/