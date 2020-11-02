//strict mode
'use strict';

let db = require('../../database');

// Exporting as a function to router.js

function getAddNewLabRoute(req, res, next) {
    console.log('Request Id:', req.params.id);
	res.render('patient/patientLabAdd', {
		username : req.session.username,
        isAdmin  : req.session.isAdmin,
        getPatient_id    : req.session.id,
		pageId   : 'addNewLab',
		title    : 'Health-plus | Add New Patient LabRecord'
	});
}

function postAddNewLabRoute(req, res, next) {
    
    //
    let query =
		'INSERT INTO Lab_Tests (testID, details, testDate, patientID) VALUES(?,?,?,?)';
	db.query(
		query,
		[  req.body.testID, req.body.details, req.body.testDate, req.session.id],
		(error, results, fields) => {
    
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
          
            
            db.query(
                'select * from Lab_Tests where  patientID=?',
                 [ req.session.id ],
                 (err, dbUsername) => {
                         res.render('patient/patientLabResult', {
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

module.exports = { get: getAddNewLabRoute, post: postAddNewLabRoute};
