import { bancoDados } from "../dbConfig.js";
import { Task } from "../models/task.model.js";

export const taskRepository = bancoDados.getRepository(Task);