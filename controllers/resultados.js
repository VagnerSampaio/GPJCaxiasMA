module.exports = function(app){
	var resultadosController = {
		//action: index
	index: function(req,res){			
		//recebe o idUnidade através do login
		pool.getConnection(function(err, connection){
			if(err){
					throw err;
			}
				
			connection.query('SELECT nomeUnidade, pontuacao FROM tcc.unidades order by pontuacao DESC', function(err, rows1){
			connection.query('SELECT * from v_consulta_completa where idUnidade = ? order by idMeta', req.session.unidade, function(err,rows2){
				if(err){
					throw err;
				}
  					var resultado = new Array();
  					var metaAtingida = new Array();
					var meta8 = new Array(); 
					
				for (var i=0; i<rows2.length; i++) {
  					if (rows2[i].indicador.localeCompare("Meta 8")==0){
						meta8.push(true);
    					resultado.push(((1-rows2[i].apurado/rows2[i].total)*100).toFixed(2));
  					} else {
						meta8.push(false);
    					resultado.push(((rows2[i].apurado/rows2[i].total)*100).toFixed(2));
  					}

  					if (resultado[i] >= rows2[i].meta) {
    					metaAtingida.push(true);
  					} else {
    					metaAtingida.push(false);
  					}
				}
				res.render('resultados/index',{
					pontos: rows1,
					metas: rows2,
					resultado: resultado,
					metaAtingida: metaAtingida,
					meta8: meta8
				});
			});
			});
			connection.release();
			});
		},
	};
	return resultadosController;
}