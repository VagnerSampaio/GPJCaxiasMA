module.exports = function(app){
	var resultadosController = {
		//action: index
		index: function(req,res){
			//recebe o idUnidade através do login
			var queryMetas = pool.query('SELECT idUnidade, tipoUnidade, nomeUnidade, '+
				'indicador, meta, descricao, formula, sistema, esclarecimento, '+
				'total, apurado, dataApuracao '+
				'FROM unidades u, metas m, metasunidades mu '+
				'WHERE u.idUnidade = mu.fk_idUnidade '+
				'AND m.idMeta = mu.fk_idMeta '+
				'AND u.idUnidade =?', req.session.unidade);
			
			queryMetas.on('error',function(err){
				console.log(err);
			});
			queryMetas.on('result',function(row){
			var params = {idUnidade: row.idUnidade};
			
			/*, tipoUnidade: row.tipoUnidade, 
				nomeUnidade: row.nomeUnidade, indicador: row.indicador, 
				meta: row.meta, descricao: row.descricao, formula: row.formula, 
				sistema: row.sistema, esclarecimento: row.esclarecimento,
				total: row.total, apurado: row.apurado, dataApuracao: row.dataApuracao};
			*/	
					
			//console.log(params);
			res.render('resultados/index', params);
			});
		},
	};
	return resultadosController;
}