import express from 'express'
import { Request, Response } from "express"
import { dataSource } from './data-source'
import { CategoriesController, ExpensesController, UsersController } from './controller/main.controllers';
import { Categories, Expenses, Users } from './entity/main.entities';

// create and setup express app
const app = express()
app.use(express.json())
const PORT = 3100;

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
app.get("/users", UsersController.getAll);
app.get("/users/:id", UsersController.get);
app.post("/users", UsersController.create);
app.patch("/users/:id", UsersController.update);
app.delete("/users/:id", UsersController.delete);
app.get("/users/:id/expenses", UsersController.getExpenses);
app.post("/users/:id/expenses", UsersController.createExpenses);
app.get("/users/:id/expenses/:expense_id", UsersController.getExpense);
app.delete("/users/:id/expenses/:expense_id", UsersController.deleteExpense);
app.patch("/users/:id/expenses/:expense_id", UsersController.updateExpense);

app.post("/categories", CategoriesController.create);
app.get("/categories", CategoriesController.getAll);

app.post("/expenses", ExpensesController.create);
app.get("/expenses/:id", ExpensesController.get);
app.delete("/expenses/:id", ExpensesController.delete);
app.patch("/expenses/:id", ExpensesController.update);

// start express server
app.listen(PORT)