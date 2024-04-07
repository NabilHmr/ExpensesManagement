import { Expenses } from "../entity/Expenses";
import { dataSource } from "../data-source";
import { Request, Response, response } from "express";
import { Repository } from "typeorm";

export class ExpensesController {
  private static expensesRepository: Repository<Expenses> = dataSource.getRepository(Expenses);

  static create = async (req: Request, res: Response) => {
    const expenses = this.expensesRepository.create(req.body);
    const results = await this.expensesRepository.save(expenses);
    return res.send(results);
  };

  static get = async (req: Request, res: Response) => {
    const results = await this.expensesRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    return res.send(results);
  };

  static delete = async (req: Request, res: Response) => {
    const results = await this.expensesRepository.delete(req.params.id);
    return res.send(results);
  };

  static update = async (req: Request, res: Response) => {
    const expenses = await this.expensesRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (expenses) {
      this.expensesRepository.merge(expenses, req.body);
      const results = await this.expensesRepository.save(expenses);
      return res.send(results);
    } else {
      return res.status(404).send("Expenses not found");
    }
  };
}
