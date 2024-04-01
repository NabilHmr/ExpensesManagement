import { Expenses } from "../entity/Expenses";
import { dataSource } from "../data-source";
import { Request, Response, response } from "express";

export class ExpensesController {
  static create = async (req: Request, res: Response) => {
    const expenses = await dataSource.getRepository(Expenses).create(req.body);
    const results = await dataSource.getRepository(Expenses).save(expenses);
    return res.send(results);
  };

  static get = async (req: Request, res: Response) => {
    const results = await dataSource.getRepository(Expenses).findOneBy({
      expense_id: parseInt(req.params.id),
    });
    return res.send(results);
  };

  static delete = async (req: Request, res: Response) => {
    const results = await dataSource
      .getRepository(Expenses)
      .delete(req.params.id);
    return res.send(results);
  };

  static update = async (req: Request, res: Response) => {
    const expenses = await dataSource.getRepository(Expenses).findOneBy({
      expense_id: parseInt(req.params.id),
    });
    if (expenses) {
      dataSource.getRepository(Expenses).merge(expenses, req.body);
      const results = await dataSource.getRepository(Expenses).save(expenses);
      return res.send(results);
    } else {
      return res.status(404).send("Expenses not found");
    }
  };
}
