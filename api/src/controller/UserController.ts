import { Expenses } from '../entity/Expenses';
import { dataSource } from '../data-source';
import { Request, Response, response } from "express"
import { User } from '../entity/User';


 export class UserController {

    static getAll = async (req: Request, res: Response) => {
        const users = await dataSource.getRepository(User).find();
        return res.send(users);
    }

    static get = async (req: Request, res: Response) => {
        const results = await dataSource.getRepository(User).findOneBy({
            id: parseInt(req.params.id),
        })
        return res.send(results);
    }

    static delete = async (req: Request, res: Response) => {
        const results = await dataSource.getRepository(User).delete(req.params.id);
        return res.send(results);
    }

    static update = async (req: Request, res: Response) => {
        const user = await dataSource.getRepository(User).findOneBy({
            id: parseInt(req.params.id),
        })
        if (user) {
            dataSource.getRepository(User).merge(user, req.body);
            const results = await dataSource.getRepository(User).save(user);
            return res.send(results);
        } else {
            return res.status(404).send("User not found");
        }
    }

    static create = async (req: Request, res: Response) => {
        const user = await dataSource.getRepository(User).create(req.body);
        const results = await dataSource.getRepository(User).save(user);
        return res.send(results);
    }
    
    
    

}
