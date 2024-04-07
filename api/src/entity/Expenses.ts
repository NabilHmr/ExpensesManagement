import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./Users";
import { Categories } from "./Categories";

@Entity()
export class Expenses {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  date!: Date;

  @Column('decimal', { precision: 6, scale: 2 })
  amount!: number;

  @Column("varchar", { length: 200, nullable: true })
  description!: string;

  @ManyToOne(() => Categories, (category) => category.expenses)
  category!: Categories;

  @ManyToOne(() => Users, (user) => user.expenses)
  user!: Users;
}
