import { Request, Response } from "express";
import selectOrderUsers from "./selectOrderUsers";


export const getOrderUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const sort =
      req.query.sort === "name" || req.query.sort === "type"
        ? req.query.sort
        : "email";
    const order = req.query.order === "DESC" ? "DESC" : "ASC";

    const users = await selectOrderUsers(sort, order);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }
    res.status(200).send(users);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
