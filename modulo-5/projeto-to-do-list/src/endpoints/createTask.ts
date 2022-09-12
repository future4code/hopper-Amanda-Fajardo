import {Request, Response} from "express"
import connection from "../connection"

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title, description, limit_date, creator_user_id} = req.body;

       if (!title || !description || !limit_date || !creator_user_id)
throw new Error("Todos os campos precisam ser preenchidos.");

await connection("TodoListTask")
.insert({
    id: Date.now().toString(),
    title,
    description,
    limit_date: req.body.limit_date.split("/").reverse().join("-"),
    creator_user_id
})
res.send("Tarefa criada com sucesso")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}