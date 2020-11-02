//strict mode
'use strict';

var db = require('../../database');

//Patient Medication
// Exporting as a function to router.js

function getpatientMedicationRoute(req, res, next) {
	//
    console.log('Request Id:', req.params.id);
    
    db.query(
        
        'select * from Medications where patientID=?',
        [ req.params.id ],
        (err, dbUsername) => {
            if (dbUsername < 1 || dbUsername == undefined) {
                res.render('patient/patientMedication', {
                    username : req.session.username,
                    pageId   : 'patientMedication',
                    title    : 'Health-plus | Search Result - Patient Medication Information',
                    isAdmin  : req.session.isAdmin,
                    result   : dbUsername,
                    getPatient_firstName    : req.session.firstName,
                    getPatient_lastName    : req.session.lastName,
                    getPatient_id    : req.session.id,
                    getPatient_demographic    : req.session.demographic,
                    getPatient_email    : req.session.email
                });
                next();
            } else {
                res.render('patient/patientMedication', {
                    username : req.session.username,
                    pageId   : 'patientMedication',
                    title    : 'Health-plus  | Search Result - Patient Medication Information',
                    isAdmin  : req.session.isAdmin,
                    result   : dbUsername,
                     getPatient_firstName    : req.session.firstName,
                    getPatient_lastName    : req.session.lastName,
                    getPatient_id    : req.session.id,
                    getPatient_demographic    : req.session.demographic,
                    getPatient_email    : req.session.email
                });
                next();
            }
        }
    );
    //
}

module.exports = { get: getpatientMedicationRoute };
