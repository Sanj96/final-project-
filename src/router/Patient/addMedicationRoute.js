//strict mode
'use strict';

let db = require('../../database');

// Exporting as a function to router.js

function getAddNewMedRoute(req, res, next) {
    console.log('Request Id:', req.params.id);
	res.render('patient/patientMedAdd', {
		username : req.session.username,
        isAdmin  : req.session.isAdmin,
        getPatient_id    : req.session.id,
		pageId   : 'addNewMed',
		title    : 'Health-plus | Add New Patient Medication Record'
	});
}

function postAddNewPrescRoute(req, res, next) {
    
    //
    let query =
		'INSERT INTO Medication (medicationID, allergies, currentMed, toDate, fromDate, patientID) VALUES(?,?,?, ?, ?,?)';
	db.query(
		query,
		[ req.body.medicationID, req.body.allergies, req.body.currentMed,req.body.toDate,req.body.fromDate,req.session.id],
		(error, results, fields) => {
    
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
          
            
            db.query(
                'select * from Medication where patientID=?',
                 [ req.session.id ],
                 (err, dbUsername) => {
                         res.render('patient/patientMedication', {
                             username : req.session.username,
                             pageId   : 'patientMenu',
                             title    : 'Health-plus | Patient Profile',
                             isAdmin  : req.session.isAdmin,
                             result   : dbUsername,
                             getPatient_firstName    : req.session.firstName,
                             getPatient_lastName    : req.session.lastName,
                             getPatient_id    : req.session.id,
                             getPatient_demographic    : req.session.demographic,
                             getPatient_email   : req.session.email
                         });
                         next();
                 }
             );
            //

		}
	);

    //	
}

module.exports = { get: getAddNewMedRoute, post: postAddNewMedRoute};

