import { Router } from "express";
import { CategoryController } from "../controller/categoryController.js";

export class CategoryRoutes {
  private router: Router;
  private categoryController: CategoryController;

  constructor() {
    this.router = Router();
    this.categoryController = new CategoryController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/", (req, res) =>
      this.categoryController.createCategory(req, res),
    );
    this.router.get("/", (req, res) =>
      this.categoryController.getAllCategories(req, res),
    );
    this.router.put("/:id", (req, res) =>
      this.categoryController.updateCategory(req, res),
    );
    this.router.delete("/:id", (req, res) =>
      this.categoryController.deleteCategory(req, res),
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
