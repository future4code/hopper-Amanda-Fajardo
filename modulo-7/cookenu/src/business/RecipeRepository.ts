import {Recipe} from "../model/recipe"

export interface RecipeRespository{
    insertRecipe(newRecipe:Recipe):Promise<void>
    findRecipe(id:string):Promise<any>
    
}