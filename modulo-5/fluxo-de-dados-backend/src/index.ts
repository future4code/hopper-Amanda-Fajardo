import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Product, productsList } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 01
app.get("/test", (req: Request, res: Response) => {
  res.send("Deu bom na API");
});

//Exercício 03
app.post("/criar-produto", (req: Request, res: Response) => {
  const newName: string = req.body.name;
  const newPrice: number = req.body.price;
  const newProduct: Product = {
    id: Date.now().toString(),
    name: newName,
    price: newPrice,
  };
  const createNewProduct = [...productsList, newProduct];
  return res.status(200).send(createNewProduct);
});


//Exercício 04
app.get("/produtos", (req: Request, res: Response) => {
 
  res.status(200).send(productsList);
});

//Exercício 05
app.put("/editar-preco/:id", (req: Request, res: Response) => {
    
    const id: string = (req.params.id)
    const body: number = req.body.price
  
      productsList.filter((item) =>{
      return item.id === id
    }).map((item)=>{
      item.price = body
      return item
    })
    res.status(200).send(productsList)
  });

//Exercício 06
app.delete("/deletar-produto/:id", (req: Request, res:Response)=>{
    const id: string = (req.params.id)

 const filterProduct = productsList.filter((item, del)=>{
    if(item.id === id)filterProduct.splice(del,1)
       
 })
 res.status(200).send(productsList)
})  


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
