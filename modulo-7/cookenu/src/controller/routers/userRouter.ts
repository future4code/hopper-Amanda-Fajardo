import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router();


const userBase = new UserDatabase()

const userBusiness = new UserBusiness(userBase)

const userController = new UserController(userBusiness)

userRouter.post("/signup", (req, res) => userController.signup (req, res));
userRouter.post("/login", (req, res) => userController.Login(req, res));
userRouter.get("/profile", (req, res) => userController.Profile(req, res))
userRouter.get("/allusers", (req, res) => userController.GetAllUsers(req, res));
userRouter.get("/perfil:id", (req, res) => userController.Users(req, res))