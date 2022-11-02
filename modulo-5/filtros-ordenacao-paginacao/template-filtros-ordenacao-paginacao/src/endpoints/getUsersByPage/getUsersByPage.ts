// import { Request, Response } from "express";
// import selectUsersByPage from "./selectUsersByPage";

// export const getUsersByPage = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     let page = Number(req.query.page);
//     const limit = 5;
//     const offset = (page - 1) * limit;
//     const users = await selectUsersByPage(limit, offset);

//     if (!users.length) {
//       res.statusCode = 404;
//       throw new Error("No users found");
//     }
//     res.status(200).send(users);
//   } catch (error: any) {
//     res.send(error.message || error.sqlMessage);
//   }
// };
