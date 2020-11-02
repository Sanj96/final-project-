//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

//Adding provider route functions
let allProviders = require('./provider/allProviders');
let providerProfileRoute = require('./provider/providerProfileRoute');
let updateProviderRoute = require('./provider/updateProviderRoute');
let deleteProviderRoute = require('./provider/deleteProvider');

// Routes for patient
let patientLabAddRoute = require('./patient/addLabTestRoute');
let AddNewMedRoute = require('./patient/addMedicationRoute');
let addNewPatientRoute = require('./patient/addNewPatientRoute');
let addNotesRoute = require('./patient/addNotesRoute');
let addRadiologyRoute = require('./patient/addNewPatientRoute');
let patientBillingRoute = require('./patient/billingInformationRoute');
let listPatientRoute = require('./patient/listPatientRoute');
let patientMenuRoute = require('./patient/patientMenuRoute');
let searchPatientRoute = require('./patient/searchPatientRoute');
let patientRadiologyRoute = require('./patient/searchRadiologyRoute');
let updatePatientRoute = require('./patient/updatePatientRoute');
let patientMedicationRoute = require('./patient/viewMedication');


//Defining routes
router.get('/patient/:id/main', patientMenuRoute.get);
router.get('/patient/:id/LabAdd', patientLabAddRoute.get);
router.post('/patient/LabAdd', patientLabAddRoute.post);
router.get('/patient/search', searchPatientRoute.get);
router.post('/patient/search', searchPatientRoute.post);
router.get('/patient/new', addNewPatientRoute.get);
router.post('/patient/new', addNewPatientRoute.post);
router.get('/patient/:id/billing', billingInformationRoute.get);
router.get('/patient/:id/NotesAdd', ddNotesRoute.get);
router.get('/provider/:id', providerProfileRoute.get);
router.get('/provider/search', searchProviderRoute.get);
router.post('/provider/searchresults', searchProviderRoute.post);
router.get('/patient/:id/radiology', searchRadiologyRoute.get);
router.post('/patient/RadioAdd', RadiologyRoute.post);


