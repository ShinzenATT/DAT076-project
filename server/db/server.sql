CREATE TABLE Accounts (
    id SERIAL NOT NULL PRIMARY KEY ,
    name TEXT NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TYPE AssociationType AS ENUM('utskott', 'forening', 'kommittee', 'utomstaende');

CREATE TABLE Committees(
    id INT PRIMARY KEY REFERENCES Accounts,
    description TEXT,
    facebook TEXT,
    instagram TEXT,
    website TEXT,
    logo_url TEXT,
    banner_url TEXT,
    type AssociationType NOT NULL
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
