import connection from "../connection";
import {Request, Response} from "express";

export const getUserById = async (req: Request, res:Response): Promise<void>=>{
    try{
        const id = req.params.id
        const result = await connection("TodoListUser")
        .select("id", "nickname")
        .where({id: id})      //pode passar o req.params.id direto nas chaves?
         if(!result.length){
            throw new Error("Erro.")
        }
        res.status(200).send(result[0])
            
    } catch (error: any){
        res.status(400).send(error.message)
    }
}