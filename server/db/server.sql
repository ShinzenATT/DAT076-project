CREATE TABLE Accounts (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Events (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    start TIMESTAMP NOT NULL ,
    end TIMESTAMP NOT NULL,
    description VARCHAR(500) NOT NULL DEFAULT '',
    location VARCHAR(100) NOT NULL,
    hostId int NOT NULL,
    imagePath VARCHAR(200),
    PRIMARY KEY (id),
    FOREIGN KEY (hostId) REFERENCES Accounts(id)
);
