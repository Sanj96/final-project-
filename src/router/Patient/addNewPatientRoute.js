//strict mode
'use strict';

let db = require('../../database');

//ADD NEW PATIENT PAGE
// Exporting as a function to router.js

function getAddNewPatientRoute(req, res, next) {
	res.render('patient/addNewPatient', {
		username : req.session.username,
        isAdmin  : req.session.isAdmin,
        getPatient_firstName : "",
        getPatient_lastName    : "",
        getPatient_id    : "",
        getPatient_demographic   : "",
        getPatient_email    : "",
		pageId   : 'addNewPatient',
		title    : 'Health-plus | Add New Patient'
	});
}

function postAddNewPatientRoute(req, res, next) {
    if (req.body.patient_id =="" || req.body.patient_firstname=="" || req.body.patient_lastname=="" || req.body.patient_demographic=="" || req.body.patient_email=="")
{
    req.flash('error', 'All fields are neccesary.');
                   
   // res.redirect('/patient/new');
   res.render('patient/addNewPatient', {
    username : req.session.username,
    pageId   : 'patientMenu',
    title    : 'Health-plus | Patient Profile',
    isAdmin  : req.session.isAdmin,
    error   : "All field is required.",
    getPatient_firstName    : req.body.patient_firstname,
    getPatient_lastName    : req.body.patient_lastname,
    getPatient_id    : req.body.patient_id,
    getPatient_demographic    : req.body.patient_demographic,
    getPatient_email    : req.body.patient_email
});
next();
} else {
    //
    let query =
		'INSERT INTO patient_profile (patient_id,patient_firstname,patient_lastname,patient_street, patient_contact, patient_DOB, patient_city, patient_province, patient_postalcode, patient_email) VALUES(?, ?, ?, ?, ?,?,?,?,?,?)';
	db.query(
		query,
		[ req.body.patient_id req.body.patient_firstname, req.body.patient_lastname, req.body.patient_demographic, req.body.patient_email ],
		(error, results, fields) => {
    
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
          
            
            db.query(
                'select * from Patient where patientID=?',
                 [ req.body.patient_id ],
                 (err, dbUsername) => {

                    req.session.id = req.body.patient_id;
                    req.session.firstName = req.body.patient_firstname;
                    req.session.lastName = req.body.patient_lastname;
                    req.session.demographic = req.body.patient_demographic;
                    req.session.email= req.body.patient_email;

                         res.render('patient/patientMenu', {
                             username : req.session.username,
                             pageId   : 'patientMenu',
                             title    : 'Health-plus | Patient Profile',
                             isAdmin  : req.session.isAdmin,
                             result   : dbUsername,
                             patientNotes:   patientNotes,
                             getPatient_firstName    : req.session.firstName,
                             getPatient_lname    : req.session.lastName,
                             getPatient_id    : req.session.id,
                             getPatient_demographic    : req.session.demographic,
                             getPatient_email   : req.session.email
                         });
                         next();
                        }
                        );
                 }
             );
            
		}
	);

module.exports = { get: getAddNewPatientRoute, post: postAddNewPatientRoute};
