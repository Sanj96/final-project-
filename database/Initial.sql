CREATE DATABASE final_project;
SHOW DATABASES
USE final_project;

CREATE TABLE Employee (
    employeeID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    contactNumber INT(15) NOT NULL,
    address VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Care_Provider (
    careProviderID INT,
    FOREIGN KEY (careProviderID)
    REFERENCES Employee(employeeID) ON DELETE CASCADE

);

CREATE TABLE Admin(
    adminID INT, 
    FOREIGN KEY (adminID)
    REFERENCES Employee(employeeID) ON DELETE CASCADE

);

LOCK TABLES Employee WRITE;
INSERT INTO Employee VALUES
(1101,'Amy','Franklin',123456,'Ontario','amy_franklin@gmail.com'),
(1102,'Julie','Walter',123456,'Nova Scotia','julie_walter@gmail.com'),
(1103,'Joseph','Taylor',123456,'Ontario','joseph_taylor@gmail.com'),
(1201,'Liam','Hemsworth',123456,'Vancouver','liam_hemsworth@gmail.com'),
(1202,'Nick','Jonas',123456,'Nova Scotia','nick_jonas@gmail.ccom');
(1203,'LeyRoy','Kingsley',123456,'Calgary''Leyroy_kingsley@gmail.com');
UNLOCK TABLES;

CREATE INDEX IF NOT EXISTS employeeIndex ON Employee (employeeID);

LOCK TABLES Care_Provider WRITE;
INSERT INTO Care_Provider VALUES
(1101),(1102),(1103);
UNLOCK TABLES;

JOIN Care_Provider ON  Employee.employeeID = Care_Provider.careProviderID WHERE Employee.employeeID = 1;

SELECT careproviderId, firstName, lastName, contactNumber, address, email FROM Care_Provider WHERE careproviderId = 1102 ;
DELETE FROM Care_Provider WHERE careProviderID = 1203 ;

LOCK TABLES Admin WRITE;
INSERT INTO Admin VALUES
(1201),(1202),(1203);
UNLOCK TABLES;

JOIN Admin ON  Employee.employeeID = Admin.adminID WHERE Employee.employeeID = 1;

SELECT adminId, firstName, lastName, contactNumber, address, email FROM Admin WHERE adminId = 1202 ;
DELETE FROM Admin WHERE adminID = 1102 ;
