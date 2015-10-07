module.exports = function(app){
	var relatoriogeralController = {
		//action: index
		index: function(req,res){			
			//recebe o idUnidade através do login
			pool.getConnection(function(err, connection){
				if(err){
						throw err;
				}
				connection.query('SELECT idUnidade, siglaUnidade, nomeUnidade, pontuacao FROM tcc.unidades order by pontuacao DESC', function(err, rows1){
				connection.query('SELECT * FROM v_consulta_completa ORDER BY pontuacao DESC', req.session.unidade, function(err,rows2){
					if(err){
						throw err;
					}
  						var resultado = new Array();
  						var metaAtingida = new Array();
					for (var i=0; i<rows2.length; i++) {
  						if (rows2[i].indicador.localeCompare("Meta 8")==0){
    						resultado.push(((1-rows2[i].apurado/rows2[i].total)*100).toFixed(2));
  						} else {
    						resultado.push(((rows2[i].apurado/rows2[i].total)*100).toFixed(2));
  						}

  						if (resultado[i] >= rows2[i].meta) {
    						metaAtingida.push(true);
  						} else {
    						metaAtingida.push(false);
  						}
					}
					res.render('relatoriogeral/index',{
						pontos: rows1,
						metas: rows2,
						resultado: resultado,
						metaAtingida: metaAtingida
					});
					console.log(rows1[0]);
				});
				});
			connection.release();
			});
		},
	};
	return relatoriogeralController;
}