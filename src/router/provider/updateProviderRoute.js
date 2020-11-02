//strict mode
'use strict';

let db = require('../../database');

//EDIT/UPDATE PATIENT PROFILE PAGE
// Exporting as a function to router.js
function showEditProviderForm(req, res, next) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		let query = 'SELECT * FROM Care_Provider WHERE careproviderId =?';
		db.query(query, [ req.params.id ], (error, results, fields) => {
			res.render('provider/updateProvider', {
				username : req.session.username,
				isAdmin  : req.session.isAdmin,
				results  : results,
				pageId   : 'updateProvider',
				title    : 'Health-plus | Update Care Provider Details'
			});
		});
	}
}

//UPDATE route - updates the provider and redirects to all providers page
function updateProviderDetailsRoute(req, res, next) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		let query =
			'UPDATE Care_Provider SET firstName=?, lastName=?, contactNumber=? , email=? WHERE careproviderId=?';
		db.query(
			query,
			[ req.body.employee_firstName, req.body.employee_lastName, req.body.Employee_contactNumber, req.params.email, req.params.id ],
			(error, results, fields) => {
				res.redirect(`/provider/${req.params.id}`);
			}
		);
	}
}

module.exports = { get: showEditProviderForm, put: updateProviderDetailsRoute };
