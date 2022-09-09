CREATE TABLE Projetos(
id VARCHAR(6) PRIMARY KEY,
name VARCHAR(40) UNIQUE NOT NULL,
title VARCHAR(40) NOT NULL,
date DATE NOT NULL
);

-- Exercício 2

INSERT INTO Projetos(id, name, title, date)
VALUES("001","LabeSky","LSy", "2023/10/05"),
("002","Labefy","LFy", "2024/01/06"),
("003","AstroZoom","AZm", "2022/12/20");

SELECT * FROM Projetos;

-- Exercício 3

ALTER TABLE Projetos
DROP COLUMN title;

DESCRIBE Projetos;

ALTER TABLE Projetos
CHANGE date dueDate DATE NOT NULL;

ALTER TABLE Funcionarios
MODIFY email VARCHAR(40) UNIQUE;

DESCRIBE Funcionarios;

-- Exercício 4

ALTER TABLE Projetos
ADD description VARCHAR(40) NOT NULL;

ALTER TABLE Projetos MODIFY description VARCHAR(100) NOT NULL;

UPDATE Projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

-- Exercício 5

SELECT * FROM Projetos ORDER BY dueDate DESC;

SELECT dueDate FROM Projetos GROUP BY dueDate;







