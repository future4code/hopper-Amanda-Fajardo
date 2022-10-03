import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, users} from "./data";
import { returnAge } from "./functions/returnAge";

const app = express();
app.use(express.json());
app.use(cors());

let clients = users

app.get("/users", (req: Request, res: Response) => {
   let errorCode = 400
   try{
    res.status(200).send(clients)
   }catch(error: any){
    res.status(errorCode).send(error.message)
   }
})

app.post("/create", (req:Request, res:Response)=>{
  let errorCode = 400
  try{
    const {name, cpf, birthday, balance, extract} = req.body
    
    if(!name || !cpf || !birthday){
      errorCode = 422
      throw new Error("Um ou mais parâmetros ausentes, verifique a documentação!");
    }
      
    const age = returnAge(birthday)
    if(age){
      clients.push({name, cpf, birthday, balance:0, extract:[]})
    } else {
      errorCode = 401
      throw new Error("Somente pessoas maiores de idade podem criar uma conta!");
      
    }
    
    const newUser: User = {
      cpf,
      name,
      birthday,
      balance,
      extract
    }

    clients.push(newUser)

    res.status(200).send({ message: 'Conta criada com sucesso!', clients })
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
