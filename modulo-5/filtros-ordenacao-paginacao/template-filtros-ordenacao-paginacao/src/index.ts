import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers/getAllUsers";
import { getOrderUsers } from "./endpoints/getOrderUsers/getOrderUsers";
// import { getUsersByPage } from "./endpoints/getUsersByPage/getUsersByPage";
import { getUsersByType } from "./endpoints/getUsersByType/getUsersByType";
import { getWithAll } from "./endpoints/getWithAll/getWithAll";


app.get("/users", getAllUsers)
app.get("/users/:type", getUsersByType)
app.get("/usersOrder", getOrderUsers)
// app.get("/usersPage", getUsersByPage)
app.get("/usersAll", getWithAll)