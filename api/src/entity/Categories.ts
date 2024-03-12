import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expenses } from "./Expenses";


export enum CategoryType {
    DEBIT = "DEBIT",
    CREDIT = "CREDIT",
}


@Entity()
export class Categories {
    
    @PrimaryGeneratedColumn()
    category_id!: number

    @OneToMany(() => Expenses, expenses => expenses.category)
    category!: Categories

    @Column("varchar", { length: 50})
    category_name!: string

    @Column({type : "enum", enum: CategoryType})
    category_type!: CategoryType

}

