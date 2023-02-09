import { RecipeRespository } from "../business/RecipeRepository";
import { Recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDatabase extends BaseDatabase implements RecipeRespository {
    public static TABLE_RECIPE = "Cookenu_recipe"

    public async insertRecipe(newRecipe: Recipe): Promise<void> {
        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPE).insert({
            id: newRecipe.getId(),
            title: newRecipe.getTitle(),
            description: newRecipe.getDescription(),
            author_id: newRecipe.getidUser()
        })
    }
    public async findRecipe(id: string): Promise<any> {
        const result = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPE).select("*").where( "id","=",`${id}` ).orderBy("create_at", "desc")
        return result
    }
}