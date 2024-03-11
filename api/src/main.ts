import express from 'express'
import { Request, Response } from "express"
import { User } from "./entity/User"
import { dataSource } from './data-source'

// create and setup express app
const app = express()
app.use(express.json())
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// establish database connection
dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
  const results = await dataSource.getRepository(User).findOneBy({
    id: parseInt(req.params.id),
  })
  return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
  const user = await dataSource.getRepository(User).create(req.body)
  const results = await dataSource.getRepository(User).save(user)
  return res.send(results)
})

app.put("/users/:id", async function (req: Request, res: Response) {
  const user = await dataSource.getRepository(User).findOneBy({
    id: parseInt(req.params.id),
  })
  if (user) {
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send(results)
  } else {
    return res.status(404).send("User not found")
  }
})

app.delete("/users/:id", async function (req: Request, res: Response) {
  const results = await dataSource.getRepository(User).delete(req.params.id)
  return res.send(results)
})

// start express server
app.listen(PORT)