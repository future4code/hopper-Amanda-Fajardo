import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO, UserLoginDTO, UserPerfilDTO } from "../model/user";

export class UserController {
    constructor(private userBusiness: UserBusiness) { }

    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const input: UserInputDTO = {
                name,
                email,
                password
            }
            const token = await this.userBusiness.Create(input)
            res.status(200).send({ message: "Usuario criado com sucesso!", token })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async Login(req: Request, res: Response) {

        try {
            const { email, password } = req.body

            const input: UserLoginDTO = {
                email,
                password
            }

            const token = await this.userBusiness.Login(input)
            res.status(200).send(token)
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }


    }
    public async Profile(req: Request, res: Response) {

        try {
            const token = req.headers.authorization as string
           
            

            const profile = await this.userBusiness.Profile(token)

            res.status(200).send(profile)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async Users(req: Request, res: Response) {
        
        try {
            const id = req.path
            const token = req.headers.authorization as string

            const input:UserPerfilDTO ={
                id,
                token
            } 

            const user = await this.userBusiness.Perfil(input)
            
            res.status(200).send(user)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
    public async GetAllUsers(req:Request,res:Response){
        try {
            const token = req.headers.authorization as string

            const users = await this.userBusiness.getAllUser(token)
            res.status(200).send(users)
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
       
    }
}