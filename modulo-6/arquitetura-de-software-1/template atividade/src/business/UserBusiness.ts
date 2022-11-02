import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    createUser = async(input:any) => {
        try{
            const {name, email, password} = input

            if(!name || !email || !password){
                throw new Error("Preencha todos os campos");
            }
            if(email.indexOf("@") === -1){
                throw new Error("Email inválido");
            }

            if(password.length < 6){
                throw new Error("A senha precisa conter 6 caracteres");
            }
                
                
            const id = Date.now().toString()    
            const userDatabase = new UserDatabase()
           
            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })
        } catch (error: any){
            throw new Error(error.message || "Erro ao criar usuário.");
            
        }
    }

    getAll = async (input: any) => {
        return await new UserDatabase().getAll()
    }

    deleteUser = async (input: {id:string}) => {

        if(!input.id){
            throw new Error("Insira o id!");
            
        }

        return await new UserDatabase().deleteUser(input.id)
    }
}