import { Expenses } from "../entity/Expenses";
import { dataSource } from "../data-source";
import { Request, Response, response } from "express";
import { Users } from "../entity/Users";
import { Repository } from "typeorm";

export class UsersController {
  private static usersRepository: Repository<Users> = dataSource.getRepository(Users);
  private static expensesRepository: Repository<Expenses> = dataSource.getRepository(Expenses);
  
  static getAll = async (req: Request, res: Response) => {
    const users = await this.usersRepository.find();
    return res.send(users);
  };

  static get = async (req: Request, res: Response) => {
    const results = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    return res.send(results);
  };

  static delete = async (req: Request, res: Response) => {
    const results = await this.usersRepository.delete(req.params.id);
    return res.send(results);
  };

  static update = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      // req.body.lastName = req.body.lastName.toUpperCase();
      this.usersRepository.merge(user, req.body);
      const results = await this.usersRepository.save(user);
      return res.send(results);
    } else {
      return res.status(404).send("User not found");
    }
  };

  static create = async (req: Request, res: Response) => {
    // req.body.lastName = req.body.lastName.toUpperCase();
    const user = this.usersRepository.create(req.body);
    const results = await this.usersRepository.save(user);
    return res.send(results);
  };

  static getExpenses = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expenses = user.expenses;
      return res.send(expenses);
    } else {
      return res.status(404).send("User not found");
    }
  };

  static createExpense = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = new Expenses();
      expense.date = req.body.date;
      expense.amount = req.body.amount;
      expense.description = req.body.description;
      expense.category = req.body.category;
      expense.user = user;
      const results = await this.expensesRepository.save(expense);
      return res.send(results);
    } else {
      return res.status(404).send("User not found");
    }
  };

  static deleteExpense = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = await this.expensesRepository.findOneBy({
        id: parseInt(req.params.expense_id),
      });
      if (expense) {
        const results = await this.expensesRepository.delete(expense);
        return res.send(results);
      } else {
        return res.status(404).send("Expense not found");
      }
    } else {
      return res.status(404).send("User not found");
    }
  };

  static updateExpense = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = await this.expensesRepository.findOneBy({
        id: parseInt(req.params.expense_id),
      });
      if (expense) {
        this.expensesRepository.merge(expense, req.body);
        const results = await this.expensesRepository.save(expense);
        return res.send(results);
      } else {
        return res.status(404).send("Expense not found");
      }
    } else {
      return res.status(404).send("User not found");
    }
  };

  static getExpense = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = await this.expensesRepository.findOneBy({
        id: parseInt(req.params.expense_id),
      });
      if (expense) {
        return res.send(expense);
      } else {
        return res.status(404).send("Expense not found");
      }
    } else {
      return res.status(404).send("User not found");
    }
  };

  static getExpenseCategory = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = await this.expensesRepository.findOneBy({
        id: parseInt(req.params.expense_id),
      });
      if (expense) {
        return res.send(expense.category);
      } else {
        return res.status(404).send("Expense not found");
      }
    } else {
      return res.status(404).send("User not found");
    }
  };

  static updateExpenseCategory = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expense = await this.expensesRepository.findOneBy({
        id: parseInt(req.params.expense_id),
      });
      if (expense) {
        expense.category = req.body.category;
        const results = await this.expensesRepository.save(expense);
        return res.send(results);
      } else {
        return res.status(404).send("Expense not found");
      }
    } else {
      return res.status(404).send("User not found");
    }
  };

  static createExpenses = async (req: Request, res: Response) => {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      const expenses = req.body.expenses.map((expense: any) => {
        const newExpense = new Expenses();
        newExpense.date = expense.date;
        newExpense.amount = expense.amount;
        newExpense.description = expense.description;
        newExpense.category = expense.category;
        newExpense.user = user;
        return newExpense;
      });
      const results = await this.expensesRepository.save(expenses);
      return res.send(results);
    } else {
      return res.status(404).send("User not found");
    }
  };
}
