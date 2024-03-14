import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Categories } from "./Categories";

@Entity()
export class Expenses {
    @PrimaryGeneratedColumn()
    expense_id!: number

    @CreateDateColumn()
    expense_date!: Date

    @Column()
    expense_amount!: number

    @Column("varchar", { length: 200})
    expense_description!: string

    @ManyToOne(() => Categories, categories => categories.expenses)
    category!: Categories

    @ManyToOne(() => User, user => user.expenses)
    user!: User
}