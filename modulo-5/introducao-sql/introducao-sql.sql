CREATE TABLE Funcionarios(
id VARCHAR(6) PRIMARY KEY,
name VARCHAR(40) NOT NULL,
email VARCHAR(40) NOT NULL
);
DESCRIBE Funcionarios;

-- Exercício 2

INSERT INTO Funcionarios(id, name, email) 
VALUES("001", "Luana", "lua@lbn.com"),
("002", "Vinicius", "vini@lbn.com"),
("003", "Laura", "lau@lbn.com");

-- Exercício 3

SELECT * FROM Funcionarios;

SELECT id AS identifier, name FROM Funcionarios;

SELECT * FROM Funcionarios
WHERE id = "003";

SELECT * FROM Funcionarios 
WHERE name LIKE "%a%";

SELECT * FROM Funcionarios
WHERE name NOT LIKE "%r%"
AND name LIKE "%u%";

-- Exercício 4

INSERT INTO Funcionarios(id, name, email)
VALUES("004", "Yuzo", "yuzo@lbn.com");

DELETE FROM Funcionarios
WHERE id = "004";
