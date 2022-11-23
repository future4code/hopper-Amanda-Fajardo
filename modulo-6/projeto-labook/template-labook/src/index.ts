import { app } from "./controller/app";
import { feedRouter } from "./controller/routes/feedRouter";
import { friendRouter } from "./controller/routes/friendRouter";
import { postRouter } from "./controller/routes/postRouter";
import { userRouter } from "./controller/routes/userRouter";


app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friend', friendRouter)
app.use('/feed', feedRouter)