CREATE TABLE Medication(
medicationID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
allergies VARCHAR(100),
currentMed CHAR(100), 
toDate DATETIME,
fromDate DATETIME,
patientID INT,
FOREIGN KEY (patientID) REFERENCES Patient(patientID) 
);

LOCK TABLES Medication WRITE;
INSERT INTO Medication VALUES
(20001,'Profanal','Metformin','2020/01/12','2020/02/12',1001),(20002,'Nothing','Juneferin','2020/05/01','2020/06/01',1003);
UNLOCK TABLES;