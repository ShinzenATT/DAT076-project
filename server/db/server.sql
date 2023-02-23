CREATE TABLE Accounts (
    id SERIAL NOT NULL PRIMARY KEY ,
    name TEXT NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE Events (
    id SERIAL NOT NULL PRIMARY KEY ,
    name TEXT NOT NULL,
    start TIMESTAMP NOT NULL,
    stop TIMESTAMP NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    location TEXT NOT NULL,
    hostId int NOT NULL REFERENCES Accounts,
    imagePath VARCHAR(200)
);
