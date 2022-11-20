import express from "express"
import { RecipeBusiness } from "../../business/RecipeBusiness";
import { RecipeController } from "../RecipeController";
import { RecipeDatabase } from "../../data/RecipeDatabase";


export const recipeRouter = express.Router();

const recipeBaseDatabase = new RecipeDatabase()

const recipeBusiness = new RecipeBusiness(recipeBaseDatabase)

const recipeController = new RecipeController(recipeBusiness)

recipeRouter.post("/recipe", (req, res)=> recipeController.Create(req, res))

recipeRouter.get("/recipe:id", (req, res)=> recipeController.Recipes(req, res))