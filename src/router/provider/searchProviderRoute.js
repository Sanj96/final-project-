//strict mode
'use strict';

let db = require('../../database');

//SEARCH PROVIDER PAGE
// Exporting as a function to router.js

function searchProviderRoute(req, res, next) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		res.render('provider/searchProvider', {
			username : req.session.username,
			isAdmin  : req.session.isAdmin,
			pageId   : 'searchProvider',
			title    : 'Health-plus| Search Care Provider'
		});
	}
}

function pullSearchProviderRoute(req, res, next) {
	if (req.session.isAdmin !== 1) {
		!req.session.isAdmin;
		res.redirect('/logout');
	} else {
		let query =
			'SELECT careproviderId, firstName, lastName, contactNumber, address, email FROM Care_Provider WHERE careprovider_firstname =? careproviderId =?';
		db.query(query, [ req.body.careProvider_id ], (error, results, fields) => {
			if (results < 1 || results == undefined) {
				req.flash('error', 'No care providers found');
				res.redirect('/provider/search');
			} else {
				res.render('provider/searchResults', {
					username : req.session.username,
					isAdmin  : req.session.isAdmin,
					results  : results,
					pageId   : 'searchResultsProvider',
					title    : 'Health-plus | Search Care Provider'
				});
			}
		});
	}
}

module.exports = { get: searchProviderRoute, post: pullSearchProviderRoute };
