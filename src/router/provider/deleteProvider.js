//strict mode
'use strict';

let db = require('../../database');

//DELETE route - deletes care provider and redirects the page 
function deleteProviderRoute(req, res, next) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		let query = 'DELETE FROM Care_Provider WHERE careProviderID =?';
		db.query(query, [ req.params.id ], (error, results, fields) => {
			res.redirect('/provider');
		});
	}
}

module.exports = { delete: deleteProviderRoute };
