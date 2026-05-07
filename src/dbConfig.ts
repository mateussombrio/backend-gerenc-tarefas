import { DataSource } from "typeorm";
import { Task } from "./models/task.model.js";
import { Category } from "./models/category.model.js";

export const bancoDados = new DataSource({
  type: "postgres",
  database: "tasks.db",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  synchronize: true,
  logging: false,
  entities: [Task, Category],
});
