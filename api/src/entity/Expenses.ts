import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Users } from "./Users";
import { Categories } from "./Categories";

@Entity()
export class Expenses {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  date!: Date;

  @Column()
  amount!: number;

  @Column("varchar", { length: 200 })
  description!: string;

  @ManyToOne(() => Categories, (category) => category.expenses)
  category!: Categories;

  @ManyToOne(() => Users, (user) => user.expenses)
  user!: Users;
}
