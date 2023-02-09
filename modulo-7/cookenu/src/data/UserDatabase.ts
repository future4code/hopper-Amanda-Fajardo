import { UserRepository } from "../business/UserRepository";
import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase implements UserRepository {
    public static TABLE_USER = "Cookenu_User"

    public async insertUser(newUser: User): Promise<void> {
        await BaseDatabase.connection(UserDatabase.TABLE_USER).insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        })
    }
    public async findUserByEmail(email: string): Promise<any> {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USER).select("*").where("email", "=" ,`${email}` )

        return result[0]
    }
    public async findUser(id: string): Promise<void> {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USER).select("id", "name", "email").where("id", "=" ,`${id}` )


        return result[0]
    }

    public async findAllUsers(): Promise<void> {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USER).select("*")
    }
}