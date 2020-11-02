//strict mode
'use strict';

let db = require('../../database');

//PROVIDER PROFILE PAGE
// Exporting as a function to router.js

function getAllProvidersRoute(req, res) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		let query =
			'SELECT careproviderId, firstName, lastName, contactNumber, address, email FROM Care_Provider';
		db.query(query, (error, results, fields) => {
			res.render('provider/allProviders', {
				username : req.session.username,
				isAdmin  : req.session.isAdmin,
				results  : results,
				pageId   : 'allProviders',
				title    : 'Health-plus | All Care Providers'
			});
		});
	}
}

module.exports = { get: getAllProvidersRoute };
