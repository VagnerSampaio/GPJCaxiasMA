module.exports = function(app){
	//set do controlador de home
	var home = app.controllers.home;
	// a página raiz '/' recebe o index controlado pelo home
	app.get('/',home.index);
}