module.exports = function(req, res, next){
	if(!req.session.unidade){
		return res.redirect('/');
	}
	return next();
};