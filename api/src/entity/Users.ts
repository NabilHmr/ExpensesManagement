import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Expenses } from "./Expenses";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Expenses, (expenses) => expenses.user)
  expenses!: Expenses[];
}
