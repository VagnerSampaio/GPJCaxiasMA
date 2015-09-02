
module.exports = function(app){
	var homeController = {
		//action: index
		index: function(req, res){
			//renderizar a index.ejs
			res.render('home/index');
		},
		//action: login		
		login: function(req, res){
			//get dados formulario login, senha
			var login = req.body.unidade.login,
				senha = req.body.unidade.senha;
			if(senha && login){
				var unidade = req.body.unidade;
				unidade['resultados']=[];
				req.session.unidade = unidade;
				//redirecionar para página de resultados
				res.redirect('/resultados');
			} else {
				res.redirect('/');
			}
		},
		//action: logout
		logout: function(req, res){
			req.session.destroy();
			res.redirect('/');
		}
	};
	return homeController;
};