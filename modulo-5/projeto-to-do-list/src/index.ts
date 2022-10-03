import app from "./app"
import { createTask } from "./endpoints/createTask"
import {createUser} from "./endpoints/createUser"
import {getUserById} from "./endpoints/getUserById"
import { putEditUser } from "./endpoints/putEditUser"



app.get("/user/:id", getUserById)
app.post("/user", createUser)
app.put("/user/edit/:id", putEditUser) //não consegui fazer 
app.post("/task", createTask)
