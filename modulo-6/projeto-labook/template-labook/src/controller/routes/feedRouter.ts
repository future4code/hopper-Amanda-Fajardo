import express from 'express'
import { PostController } from "../PostController"


export const feedRouter = express.Router()

const postController = new PostController()

feedRouter.get('/:id', postController.getFeed)