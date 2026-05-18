import { Request, Response } from "express";
import { Task } from "../models/task.model.js";
import { Category } from "../models/category.model.js";
import { bancoDados } from "../dbConfig.js";

export class TaskController {
  taskRepo = bancoDados.getRepository(Task);

  public async createTask(req: Request, res: Response) {
    const { title, description, isDone = false, category } = req.body;
    try {
      const task = new Task();
      task.title = title;
      task.description = description;
      task.isDone = isDone;
      task.category = category;

      await this.taskRepo.save(task);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error creating task" });
    }
  }

  public async updateTask(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { title, description, isDone, category } = req.body;
    try {
      const task = await this.taskRepo.findOneBy({ id: id });
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      task.title = title || task.title;
      task.description = description || task.description;
      task.isDone = isDone !== undefined ? isDone : task.isDone;
      task.category = category || task.category;

      await this.taskRepo.save(task);
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: "Error updating task" });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const task = await this.taskRepo.findOneBy({ id: id });
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      await this.taskRepo.remove(task);
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting task" });
    }
  }

  public async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await this.taskRepo.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks" });
    }
  }
}