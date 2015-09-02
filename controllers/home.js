	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'tcc'
	});	
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
//			connection.connect();
			var queryLogin = connection.query('select * from unidade where login = ?', login);
			queryLogin.on('error',function(err){
				console.log(err);
				res.redirect('/');
			});
			queryLogin.on('result',function(row){
				console.log(row.idUnidade);
				if(row.login==login && row.senha==senha){
					//armazenar dados na sessão
					var unidade = row.idUnidade
					req.session.unidade = unidade;
					res.redirect('/resultados');
				} else {
					res.redirect('/');
				}
//			connection.end();
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