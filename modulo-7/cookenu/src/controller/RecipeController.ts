import { RecipeBusiness } from "../business/RecipeBusiness";
import {Request,Response} from "express"
import { FindRecipeInputDTO, RecipeInputDTO } from "../model/recipe";
export class RecipeController {
    constructor(private recipeBusiness: RecipeBusiness){}

    public async Create(req:Request,res:Response){

        try {
            const {title,description} = req.body
        const token = req.headers.authorization as string
        console.log( token);
        
        const input:RecipeInputDTO = {
            token,
            title,
            description

        } 
        await this.recipeBusiness.Create(input)
        res.status(200).send("Receita criada com sucesso!")
        }  catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
        

    }
    public async Recipes(req:Request,res:Response){
        try {
            const id = req.path
            const token = req.headers.authorization as string

            const input:FindRecipeInputDTO = {
                token,
                id
            }
            const recipe = await this.recipeBusiness.UserRecipe(input)

            res.status(200).send(recipe)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}