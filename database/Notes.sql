CREATE TABLE Notes(
noteID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
noteBody VARCHAR(200),
noteDate DATETIME,
writtenBy VARCHAR(100),
patientID INT,
FOREIGN KEY (patientID) REFERENCES Patient(patientID) 
);

LOCK TABLES Notes WRITE;
INSERT INTO Notes VALUES
(60001,'has shivers for no reason','2020/01/12','2020/02/12','Dr Shoestring',1001),(60002,'need to come back in 15 days','Juneferin','2020/05/01','Dr Batra',1003);
UNLOCK TABLES;
