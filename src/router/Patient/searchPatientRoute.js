/strict mode
'use strict';

let db = require('../../database');

//SEARCH PATIENT PAGE
// Exporting as a function to router.js

function searchPatientRoute(req, res, next) {
	res.render('patient/searchPatient', {
		username : req.session.username,
		isAdmin  : req.session.isAdmin,
		pageId   : 'searchPatient',
        title    : 'Health-plus | Search Patient',
		message  : req.flash('success')
	});
}

function postSearchPatientRoute(req, res, next) {
   

console.log(req.body.search);
console.log(req.body.user_id);
if (req.body.search=="SearchByName"){
    console.log(req.body.search);

    
db.query(
    'SELECT * FROM Patient WHERE firstName=? or lastName=?',
    [ req.body.user_firstName, req.body.user_lastName],
    (err, dbUsername) => {
        if (dbUsername < 1 || dbUsername == undefined) {
            username : req.session.username,
			req.flash('error', 'No Patients found with that First Name and/or Last Name and/or id');
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
                getPatient_lastName    : req.session.lastName,
                getPatient_id    : req.session.id,
                getPatient_demographic    : req.session.demographic,
                getPatient_email   : req.session.email
        }
        
        }
    )}
;

}else {
db.query(
    'SELECT * FROM Patient WHERE patientID=?',
    [ req.body.user_id ],
    (err, dbUsername) => {
        if (dbUsername < 1 || dbUsername == undefined) {
            username : req.session.username,
			req.flash('error', 'No Patients found with that ID');
			res.redirect('/patient/search');
        } else {
            req.session.firstName = dbUsername[0].patient_firstname;
            req.session.lastName = dbUsername[0].patient_lastname;
            req.session.id = dbUsername[0].patient_id;
            req.session.demographic = dbUsername[0].patient_demographic;
            req.session.email = dbUsername[0].patient_email;
            console.log("est" + dbUsername[0].patient_firstname);
            
            res.render('patient/patientmenuName', {
                username : req.session.username,
                pageId   : 'patientprofile',
                title    : 'Health-plus | Search Result - Patient Profile',
                isAdmin  : req.session.isAdmin,
                result   : dbUsername,
                getPatient_firstName    : req.session.firstName,
                getPatient_lastName    : req.session.lastName,
                getPatient_id    : req.session.id,
                getPatient_demographic    : req.session.demographic,
                getPatient_email   : req.session.email
            
            
        }
    }
);
}


module.exports = { get: searchPatientRoute, post: postSearchPatientRoute };
