CREATE TABLE Patient (
    patientID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    demographic VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL
);

LOCK TABLES Patient WRITE;
INSERT INTO Patient VALUES
(1001,'Emma','Woodhouse','Ontario','emma_woodhouse@gmail.com'),
(1002,'Frank','Churchill','Nova Scotia','frank_churchill@gmail.com'),
(1003,'Anya','Taylor','Vancouver','anya_taylor@gmail.com')
UNLOCK TABLES;


CREATE TABLE Patient_Records (
    recordID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patientID INT,
    noteID INT,
    billID INT,
    historyID INT,
    FOREIGN KEY (patientID) REFERENCES Patient(patientID),
    FOREIGN KEY (noteID) REFERENCES Notes(noteID),
    FOREIGN KEY (billID) REFERENCES Billing_Info(billID),
    FOREIGN KEY (historyID) REFERENCES Revision_History(historyID) 
);

CREATE TABLE Patient_Details (
    detailID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patientID INT,
    medicationID INT,
    immunizationID INT,
    radiologyID INT,
    testID INT,
    FOREIGN KEY (patientID) REFERENCES Patient(patientID),
    FOREIGN KEY (medicationID) REFERENCES Medication(medicationID),
    FOREIGN KEY (immunizationID) REFERENCES Immunization(immunizationID),
    FOREIGN KEY (radiologyID) REFERENCES Radiology(radiologyID),
    FOREIGN KEY (testID) REFERENCES Lab_Tests(testID) 
);