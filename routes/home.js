module.exports = function(app){
	//set do controlador de home
	var home = app.controllers.home;
	// rota raiz '/' recebe o index controlado pelo home
	app.get('/',home.index);
	//rota de login (post)
	app.post('/entrar', home.login);
	//rota de logout (get)
	app.get('/sair', home.logout);
};