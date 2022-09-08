import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// EX-01 
app.get("/", (request:Request, response) => {
  response.status(200).send("Hello from Express");
});


//EX-02
 type DataUsers = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
 }

//EX-03
const user : DataUsers[] = [
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    email: "Sincere@april.biz",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
    email: "Shanna@melissa.tv",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    phone: "1-463-123-4447",
    email: "Nathan@yesenia.net",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    phone: "493-170-9623 x156",
    email: "Julianne.OConner@kory.org",
    website: "kale.biz",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    phone: "(254)954-1289",
    email: "Lucio_Hettinger@annie.ca",
    website: "demarco.info",
  },
]

//EX-04
app.get("/user", (request:Request, response: Response)=>{
  response.send(user)
})

//EX-05
type dataPosts = {
  userId:number,
  id:number,
  title:string,
  body:string,
}

//EX-06 
const posts: dataPosts[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 2,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    userId: 2,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
]

//EX-07
app.get('/posts', (request:Request, response)=>{
   response.send(posts)
})

//EX-08
app.get('/posts/:userId', (request:Request, response) => {
  const userId = request.params.userId
  
  const post = posts.filter(user => {
    return user.userId === Number(userId)
  })
  response.status(200).send(post)
})



// app.listen(3003, () => {
//   console.log("Server is running in http://localhost:3003");
// });
