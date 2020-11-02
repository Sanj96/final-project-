CREATE TABLE Revision_History(
historyID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
historyBody CHAR(200),
revisionDate DATETIME,
writtenBy INT,
patientID INT,
constraint FOREIGN KEY (patientID) REFERENCES Patient(patientID),
constraint FOREIGN KEY (writtenBy) REFERENCES Care_Provider(careProviderID)
);

LOCK TABLES Revision_History WRITE;
INSERT INTO Revision_History VALUES
(80001,'Tested Negative for Covid','2020/01/12','Dr Hemsworth',1001),(80002,'Tested Negative for Covid','2020/05/01','Dr Hemsworth',1003);
UNLOCK TABLES;

SELECT historyID AS id,
		historyBody,
		revisionDate,
		writtenBy,
		patientId
		FROM Revision_History
		JOIN Care_Provider ON  Revision_History.writtenBy = Care_Provider.careProviderID
		WHERE Revision_History.patientId = 1;
        