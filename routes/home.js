module.exports = function(app){
	//set do controlador de home
	var home = app.controllers.home;
	// rota raiz '/' recebe action index controler home
	app.get('/',home.index);
	//rota de login (post) recebe action login
	app.post('/entrar', home.login);
	//rota de logout (get) recebe action logout
	app.get('/sair', home.logout);
};