import selectWithAll from "./selectWithAll";
import { Request, Response } from "express";

export const getWithAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name || "%";
    const type = req.query.type || "%";
    const sort = req.query.sort === "type" ? "type" : "name";
    const order = req.query.order === "ASC" ? "ASC" : "DESC";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const offset: number = (page - 1) * limit
    
const users = await selectWithAll(name, type, sort, order, limit, offset);


    if (!users.length) {
        res.statusCode = 404
        throw new Error("No users found")
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
