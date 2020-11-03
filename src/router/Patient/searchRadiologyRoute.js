/strict mode
'use strict';

var db = require('../../database');

//PATIENT RADIOLOGY
// Exporting as a function to router.js

function getpatientRadiologyRoute(req, res, next) {
    //
    console.log('Request Id:', req.params.id);
    
    db.query(
        'select * from Radiology where patientID=?',
        [ req.params.id ],
        (err, dbUsername) => {
            if (dbUsername < 1 || dbUsername == undefined) {
                res.render('patient/patientRadiology', {
                    username : req.session.username,
                    pageId   : 'patientRadiology',
                    title    : 'Heaalth-plus | Search Result - Patient Radiology Information',
                    isAdmin  : req.session.isAdmin,
                    result   : dbUsername,
                    getPatient_firstName    : req.session.firstname,
                    getPatient_lastName    : req.session.lastname,
                    getPatient_id    : req.session.id,
                    getPatient_demographic    : req.session.demographic,
                    getPatient_email    : req.session.email
                });
                next();
            } else {
                res.render('patient/patientRadiology', {
                    username : req.session.username,
                    pageId   : 'patientRadiology',
                    title    : 'Health-plus| Search Result - Patient Radiology Information',
                    isAdmin  : req.session.isAdmin,
                    result   : dbUsername,
                    getPatient_firstName    : req.session.firstname,
                    getPatient_lastName    : req.session.lastname,
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

module.exports = { get: getpatientRadiologyRoute };
