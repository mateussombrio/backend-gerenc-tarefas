import { DataSource } from "typeorm";
import { Task } from "./models/task.model.js";
import { Category } from "./models/category.model.js";

export const bancoDados = new DataSource({
  type: "postgres",
  database: process.env.DB_NAME || "tasksdb",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  synchronize: true,
  logging: false,
  entities: [Task, Category],
});
