module.exports = function(app){
	var homeController = {
		//controlador da index
		index: function(req, res){
			//renderizar a index.ejs
			res.render('home/index');
		}
	};
	return homeController;
};