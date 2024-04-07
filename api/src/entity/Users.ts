import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeUpdate, BeforeInsert, Index } from "typeorm";
import { Expenses } from "./Expenses";

@Entity("users")
@Index(["firstName", "lastName"])
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

  @BeforeUpdate()
  @BeforeInsert()
  updateLastName() {
    this.lastName = this.lastName.toUpperCase();
  }
}
