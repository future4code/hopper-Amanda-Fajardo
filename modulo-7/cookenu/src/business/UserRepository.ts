import { User } from "../model/user";


export interface UserRepository{
    insertUser(newUser:User):Promise<void>
    findUserByEmail(email: string):Promise<any>
    findUser(id: string):Promise<void>
    findAllUsers():Promise<void>

}