//strict mode
'use strict';

let db = require('../../database');

//SEARCH PATIENT PAGE
// Exporting as a function to router.js

function postSearchPatientRoute(req, res, next) {
	res.render('patient/searchPatient', {
		username : req.session.username,
		isAdmin  : req.session.isAdmin,
		pageId   : 'searchPatient',
		title    : 'Health-plus | Search Patient',
		message  : req.flash('success')
	});
}

function searchPatientRoute(req, res, next) {
   
//

db.query(
    'SELECT * FROM Patient',
    [ req.params.id ],
    (err, dbUsername) => {
        if (dbUsername < 1 || dbUsername == undefined) {
            username : req.session.username,
			req.flash('error', 'No Patients found with given ID');
			res.redirect('/patient/search');
        } else {
            req.session.firstName = dbUsername[0].patient_firstname;
            req.session.lastName = dbUsername[0].patient_lastname;
            req.session.id = dbUsername[0].patient_id;
            req.session.demographic = dbUsername[0].patient_demographic;
            req.session.email = dbUsername[0].patient_email;
            
            
            res.render('patient/patientmenuName', {
                username : req.session.username,
                pageId   : 'patientprofile',
                title    : 'Health-plus | Search Result - Patient Profile',
                isAdmin  : req.session.isAdmin,
                result   : dbUsername,
                getPatient_firstName    : req.session.firstName,
                getPatient_lname    : req.session.lastName,
                getPatient_id    : req.session.id,
                getPatient_demographic    : req.session.demographic,
                getPatient_email   : req.session.email
            });
            
            
        }
    }
);

//
}

module.exports = { get: searchPatientRoute, post: postSearchPatientRoute };