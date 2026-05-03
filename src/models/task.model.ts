import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Category } from "./category.model.js";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar(255)")
  @IsNotEmpty()
  title!: string;

  @Column("varchar")
  description!: string;

  @Column({ default: false })
  isDone!: Boolean;

  @OneToOne(() => Category)
  @JoinColumn()
  category!: Category;
}
