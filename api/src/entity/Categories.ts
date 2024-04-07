import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expenses } from "./Expenses";

export enum CategoryType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Expenses, (expenses) => expenses.category)
  expenses!: Expenses;

  @Column("varchar", { length: 50 })
  name!: string;

  @Column({ type: "enum", enum: CategoryType })
  type!: CategoryType;
}
