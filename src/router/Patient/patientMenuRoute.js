//strict mode
'use strict';

//Patient Main Menu
// Exporting as a function to router.js

function getpatientMenuRoute(req, res) {
	res.render('patient/patientMenu', {
		username : req.session.username,
		isAdmin  : req.session.isAdmin,
		pageId   : 'patientNotes',
		title    : 'Health-plus | Patient Main Menu'
	});
}

module.exports = { get: getpatientMenuRoute };
