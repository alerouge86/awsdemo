CREATE TABLE IF NOT EXISTS Book (
    id   INTEGER      NOT NULL AUTO_INCREMENT,
    title VARCHAR(128) NOT NULL,
    author VARCHAR(128) NOT NULL,
    PRIMARY KEY (id)
);