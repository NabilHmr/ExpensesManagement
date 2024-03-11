import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

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

    @Column()
    category_id!: number

    @ManyToOne(() => User, user => user.expenses)
    user!: User
}