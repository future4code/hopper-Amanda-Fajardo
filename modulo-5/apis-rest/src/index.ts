import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, users, UserType } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

//Exercício 01

//a. Método get
//b. "/users"

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.send(error.message);
  }
});

//Exercício 02

//a. Parâmetro params. Porque é a melhor maneira para buscar algo específico usando o identificador único.

app.get("/users/:id", (req: Request, res: Response) => {
  
    let errorCode = 500
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        errorCode = 422
        throw new Error("Id precisa ser um number!");
      }
  
      const user = users.filter((user) => { 
        return user.id === id
      })
  
      if (!user.length) { 
        errorCode = 404
        throw new Error("Usuário não encontrado");
      }
  
      res.status(200).send(user)
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
