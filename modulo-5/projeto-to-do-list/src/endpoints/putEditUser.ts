import connection from "../connection";
import { Request, Response } from "express";



export const putEditUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const { name, nickname } = req.body;
 const newUser = await connection("TodoListUser")
 .select()
 .where({id})
    if (newUser.length === 0) {
      throw new Error("Usuário não encontrado.");
    }
    if(!name || !nickname){
        throw new Error("Os campos name e nickname são obrigatórios");
        
    }
     await connection("TodoListUser")
      .update({ name, nickname })
      .where({ id: id });

    res.send("Usuário editado com sucesso!");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
