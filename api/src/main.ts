import express from 'express'
import { Request, Response } from "express"
import { User } from "./entity/User"
import { dataSource } from './data-source'
import { Expenses } from './entity/Expenses';
import { ExpensesController } from './controller/ExpensesController';
import { UserController } from './controller/UserController';
import { Categories } from './entity/Categories';
import { CategoriesController } from './controller/CategoriesController';

// create and setup express app
const app = express()
app.use(express.json())
const PORT = 3000;

//const expensesController = new ExpensesController();
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
app.get("/users", UserController.getAll);
app.get("/users/:id", UserController.get);
app.post("/users", UserController.create);
app.patch("/users/:id", UserController.update);
app.delete("/users/:id", UserController.delete);

app.post("/categories", CategoriesController.create);
app.get("/categories", CategoriesController.getAll);


app.post("/expenses", ExpensesController.create);
app.get("/expenses/:id", ExpensesController.get);
app.delete("/expenses/:id", ExpensesController.delete);
app.patch("/expenses/:id", ExpensesController.update);

// start express server
app.listen(PORT)