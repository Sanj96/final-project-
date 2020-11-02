# final-project-

Description:  An EMR system for healthcare providers with authentication

Used: Node, Express, MySQL

=============================================


The project is designed in a way that all the mysql databases are in the database file. 
1. init file has the authentication,default values and error handling. 
2. src has the routes with some of the APIs and the server. 


Instructions: 
git clone https://github.com/Sanj96/final-project-
1) npm install bcrypt body-parser connect-flash dotenv ejs express express-session method-override mysql req-flash --save
2) npm install eslint eslint-config-airbnb-base eslint-plugin-import nodemon --save
3) create a database on your localhost MySQL by copying and pasting code in database starting with database/initial.sql
4) create a .env file and add the following information:

// Connection keys
HTTP_PORT= add your port #
USERNAME="addusername"
PASSWORD="addpassword"
SESSION_SECRET="addsecretsessionname"

//DB keys
DB_HOST='adddatabaselocalhost'
DB_USER='adddatabasebusername'
DB_PASSWORD='adddatabasepassword'
DB_NAME='adddatabasename'

5) npm start

==============================================

The project is to design an EMR system for the care providers through which a care provider such as a family doctor can:
1) Login
2) Search for patient using patient’s Health Card Number
3) View Patient Details
4) Update Patient details
5) Write notes on patient details page – the notes should appear in reverse chronological
order. For e.g. if doctor abc has posted a note on 19-Apr-2020 and doctor xyz has posted a note on 20-apr-2020 for the same patient. The doctor xyz’s note would appear on the top.
6) The patient details page should also show the revision history for the patient record. For e.g. if doctor abc has changed the patient address for patient named Peter Patterson, it should show up in the revision history as “Peter’s address changed on 19-Apr-2020 by abc” and so forth with latest revision at the top.

Design a super admin interface where a super admin user would be able to:
1) Search/Create/Read/Update/Delete Patients
2) Search/Create/Read/Update/Delete Care Providers

