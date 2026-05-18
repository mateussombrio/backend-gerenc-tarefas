import { Request, Response } from "express";
import { Category } from "../models/category.model.js";
import { bancoDados } from "../dbConfig.js";

export class CategoryController {
  categoryRepo = bancoDados.getRepository(Category);

  public async createCategory(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const category = new Category();
      category.name = name;

      await this.categoryRepo.save(category);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error creating category" });
    }
  }

  public async updateCategory(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { name } = req.body;
    try {
      const category = await this.categoryRepo.findOneBy({ id: id });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      category.name = name || category.name;

      await this.categoryRepo.save(category);
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Error updating category" });
    }
  }

  public async deleteCategory(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const category = await this.categoryRepo.findOneBy({ id: id });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      await this.categoryRepo.remove(category);
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting category" });
    }
  }

  public async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await this.categoryRepo.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories" });
    }
  }
}
