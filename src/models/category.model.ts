import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("categories")
export class Category{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar(255)")
    name!: string;
}   