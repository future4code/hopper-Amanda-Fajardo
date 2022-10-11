# Exercício - Arquitetura de Software I

## ESTRUTURA DE DADOS

- ## Usuários
  - id
  - name
  - email
  - password

---

## CRIAÇÃO DE TABELA - MySql

```sql
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```

---

## ENDPOINTS

- ## Cadastro de usuários

  - Método: POST
  - Path: `/createUser`
  - Body:
    {
    "name": "Michael Scott",
    "email": "michael@dundermifflin.com",
    "password": "theboss"
    }

- ## Buscar todos os usuários

  - Método: GET
  - Path: `/all`
  - Endpoint sem body, deve apenas retornar como resposta um array com todas as informações de todos os usuários.

- ## Deletar um usuário

  - Método: DELETE
  - Path: `/:id`
  - Endpoint sem body, deve receber o id de um usuário em seu path. Deve retornar uma mensagem de sucesso em caso de deleção.


