//strict mode
'use strict';

//EDIT/UPDATE PATIENT PROFILE PAGE
// Exporting as a function to router.js
function updatePatientRoute(req, res, next) {
	res.render('patient/updatePatient', {
		username : req.session.username,
		isAdmin  : req.session.isAdmin,
		pageId   : 'updatePatient',
		title    : 'Health-plus | Search Patient'
	});
}

module.exports = { get: updatePatientRoute };
