//strict mode
'use strict';

let db = require('../../database');

// Exporting as a function to router.js
function getAddNotesRoute(req, res, next) {
	   
        console.log('Request Id:', req.params.id);
        res.render('patient/patientNotesAdd', {
            username : req.session.username,
            isAdmin  : req.session.isAdmin,
            getPatient_id   : req.session.id,
            pageId   : 'addNewNotes',
            title    : 'Health-plus | Add New Patient Notes'
        });
        
}

function postAddNotesRoute(req, res, next) {
	
    let getPatientID = req.session.id;
    let getTodaysDate = new Date(Date.now()).toDateString();
    
    let query =
		'INSERT INTO patient_notes (noteID, noteBody, noteDate, writtenBy,patientID) VALUES(?, ?, ?, ?, ?)';
	db.query(
		query,
		[ req.body.noteID, req.body.noteBody,getTodaysDate, req.body.writtenBy,req.body.patient_note, getPatientID ],
		(error, results, fields) => {
            if (results < 1 || results == undefined) {
                console.log(error);
            }
            console.log(query);
            console.log(getPatientID);
            // run another sql to get the newly updated profile details
            db.query(
                'select * from Patient where patientID=?',
                 [ getPatientID ],
                 (err, dbUsername) => {
                     //
                     db.query(
                        'SELECT * FROM Notes WHERE patientID=?',
                        [ req.session.id ],
                        (err, patientNotes) => {
                     //
                         res.render('patient/patientMenu', {
                             username : req.session.username,
                             pageId   : 'patientProfile',
                             title    : 'Health-plus | Update Patient Profile Information',
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
                 }
             );
            //

		}
	);

    //
}

module.exports = { get: getAddNotesRoute, post: postAddNotesRoute };
