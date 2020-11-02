//strict mode
'use strict';

let db = require('../../database');

// Exporting as a function to router.js

function getAddNewBillingRoute(req, res, next) {
    console.log('Request Id:', req.params.id);
	res.render('patient/patientBillingAdd', {
		username : req.session.username,
        isAdmin  : req.session.isAdmin,
        getPatient_id    : req.session.id,
		pageId   : 'addNewPatient',
		title    : 'Health-plus | Add New Patient'
	});
}

function postAddNewBillingRoute(req, res, next) {
    
    //
    let query =
		'INSERT INTO patient_billing (billID, contactNumber, address, patientID) VALUES(?, ?, ?, ?)';
	db.query(
		query,
		[ req.session.billId, req.body.contactNumber, req.body.address, req.body.patientID],
		(error, results, fields) => {
    
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
          
            
            db.query(
                'select * from Billing_Info where patientId=?',
                 [ req.session.id ],
                 (err, dbUsername) => {
                         res.render('patient/patientBilling', {
                             username : req.session.username,
                             pageId   : 'patientMenu',
                             title    : 'Health-plus | Add New Patient',
                             isAdmin  : req.session.isAdmin,
                             result   : dbUsername,
                             getPatient_firstName    : req.session.firstName,
                             getPatient_lastName    : req.session.lastName,
                             getPatient_id   : req.session.id,
                             getPatient_demographic   : req.session.demographic,
                             getPatient_email    : req.session.email
                         });
                         next();
                 }
             );
            //

		}
	);

    //	
}

module.exports = { get: getAddNewBillingRoute, post: postAddNewBillingRoute};

