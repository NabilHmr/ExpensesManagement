import { Repository } from "typeorm";
import { dataSource } from "../data-source";
import { Categories } from "../entity/Categories";

import { Request, Response } from "express";

export class CategoriesController {
  private static categoriesRepository: Repository<Categories> = dataSource.getRepository(Categories);

  static create = async (req: Request, res: Response) => {
    const categories = this.categoriesRepository.create(req.body);
    const results = await this.categoriesRepository.save(categories);
    return res.send(results);
  };

  static getAll = async (req: Request, res: Response) => {
    const categories = await this.categoriesRepository.find();
    return res.send(categories);
  };
}
