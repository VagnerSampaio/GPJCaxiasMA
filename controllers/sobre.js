module.exports = function(app){
	var sobreController = {
		//action: index
		index: function(req, res){
			//renderizar a index.ejs
			res.render('sobre/index');
		},
	};
	return sobreController;
};