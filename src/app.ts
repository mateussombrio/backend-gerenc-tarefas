import express, { Express } from "express";
import cors from "cors";
import { DataSource } from "typeorm";
import { TaskRoutes } from "./routes/taskRoutes.js";
import { CategoryRoutes } from "./routes/categoryRoutes.js";

export class App {
  private app: Express;
  private port: number;
  private database: DataSource;

  constructor(port: number, database: DataSource) {
    this.app = express();
    this.port = port;
    this.database = database;
    this.initializeMiddleware();
    this.initializeRoutes();
  }

  private initializeMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    const taskRoutes = new TaskRoutes();
    const categoryRoutes = new CategoryRoutes();
    this.app.use("/api/tasks", taskRoutes.getRouter());
    this.app.use("/api/categories", categoryRoutes.getRouter());
  }

  public async start(): Promise<void> {
    try {
      await this.database.initialize();
      console.log("✓ Conexão com o banco de dados estabelecida com sucesso!");

      this.app.listen(this.port, () => {
        console.log(`✓ Servidor rodando na porta ${this.port}`);
      });
    } catch (error) {
      console.error("✗ Erro ao iniciar a aplicação:", error);
      process.exit(1);
    }
  }
}
