import connection from "../connection";
import { Request, Response } from "express";


export const createUser = async (req:Request, res:Response): Promise<void> => {
    try {
        const {name, nickname, email} = req.body

        if(!name || !nickname || !email){
            throw new Error("Verifique se todos campos estão preenchidos.");
            
        }
        await connection("TodoListUser")
        .insert({
            id: Date.now().toString(),
            name,
            nickname,
            email
        })
        res.send("Usuário criado com sucesso!")
    } catch (error: any) {
   res.status(400).send(error.sqlMessage || error.message)
    }
}