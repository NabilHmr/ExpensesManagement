import { Expenses } from "../entity/Expenses";
import { dataSource } from "../data-source";
import { Request, Response, response } from "express";
import { Users } from "../entity/Users";
import { Repository } from "typeorm";

export class UsersController {
  private static userRepository: Repository<Users> = dataSource.getRepository(Users);
  
  static getAll = async (req: Request, res: Response) => {
    const users = await this.userRepository.find();
    return res.send(users);
  };

  static get = async (req: Request, res: Response) => {
    const results = await this.userRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    return res.send(results);
  };

  static delete = async (req: Request, res: Response) => {
    const results = await this.userRepository.delete(req.params.id);
    return res.send(results);
  };

  static update = async (req: Request, res: Response) => {
    const user = await this.userRepository.findOneBy({
      id: parseInt(req.params.id),
    });
    if (user) {
      this.userRepository.merge(user, req.body);
      const results = await this.userRepository.save(user);
      return res.send(results);
    } else {
      return res.status(404).send("User not found");
    }
  };

  static create = async (req: Request, res: Response) => {
    const user = this.userRepository.create(req.body);
    const results = await this.userRepository.save(user);
    return res.send(results);
  };
}
