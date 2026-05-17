import { Router } from "express";
import { TaskController } from "../controller/taskController.js";

export class TaskRoutes {
  private router: Router;
  private taskController: TaskController;

  constructor() {
    this.router = Router();
    this.taskController = new TaskController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/", (req, res) =>
      this.taskController.createTask(req, res),
    );
    this.router.get("/", (req, res) =>
      this.taskController.getAllTasks(req, res),
    );
    this.router.put("/:id", (req, res) =>
      this.taskController.updateTask(req, res),
    );
    this.router.delete("/:id", (req, res) =>
      this.taskController.deleteTask(req, res),
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
