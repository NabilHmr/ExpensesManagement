import { dataSource } from "../data-source";
import { Categories } from "../entity/Categories";

import { Request, Response } from "express";

export class CategoriesController {


    static create = async (req: Request, res: Response) => {
        const categories = await dataSource.getRepository(Categories).create(req.body);
        const results = await dataSource.getRepository(Categories).save(categories);
        return res.send(results);
    }

    static getAll = async (req: Request, res: Response) => {
        const categories = await dataSource.getRepository(Categories).find();
        return res.send(categories);
    }

    
}