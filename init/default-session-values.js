'use strict';

//Applies default session values

module.exports = function loginMiddleware(req, res, next) {
	console.log(req.session);

	if (req.session.username === undefined) {
		req.session.username = null;
		res.redirect('/login');
	}
	next();
};
