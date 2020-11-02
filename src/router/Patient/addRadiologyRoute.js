//strict mode
'use strict';

let db = require('../../database');

// Exporting as a function to router.js

function getAddNewRadioRoute(req, res, next) {
    console.log('Request Id:', req.params.id);
	res.render('patient/patientRadioAdd', {
		username : req.session.username,
        isAdmin  : req.session.isAdmin,
        getPatient_hcard    : req.session.id,
		pageId   : 'addNewRadio',
		title    : 'Me | Add New Patient Radiology Record'
	});
}

function postAddNewRadioRoute(req, res, next) {
    
    //
    let query =
		'INSERT INTO radiology (radiologyID, details, radiologyDate, patientID) VALUES(?,?, ?, ?)';
	db.query(
		query,
		[ req.body.radiologyID, req.body.details, req.body.radiologyDate,  req.session.id],
		(error, results, fields) => {
    
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
          
            
            db.query(
                'select * from radiology where patientID=?',
                 [ req.session.id ],
                 (err, dbUsername) => {
                         res.render('patient/patientRadiology', {
                             username : req.session.username,
                             pageId   : 'patientMenu',
                             title    : 'Chancey | Patient Profile',
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

module.exports = { get: getAddNewRadioRoute, post: postAddNewRadioRoute};