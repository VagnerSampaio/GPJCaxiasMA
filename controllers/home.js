module.exports = function(app){
	var homeController = {
		//action: index
		index: function(req, res){
			//renderizar a index.ejs
			res.render('home/index');
		},
		//action: login		
		login: function(req, res){
			var login = req.body.unidade.login,
				senha = req.body.unidade.senha;
			
			var queryLogin = pool.query('SELECT idUnidade, login, senha FROM unidades WHERE login = ?', login);
			queryLogin.on('error',function(err){
				console.log(err);
				res.redirect('/');
			});
			queryLogin.on('result',function(row){
				if(row.login==login && row.senha==senha){
					//armazenar dados na sessão
					req.session.unidade = row.idUnidade;
					//redirecionar para rota resultados
					res.redirect('/resultados');
				} else {
					res.redirect('/');
				}
			});
		},
		//action: logout
		logout: function(req, res){
			req.session.destroy();
			res.redirect('/');
		}
	};
	return homeController;
};