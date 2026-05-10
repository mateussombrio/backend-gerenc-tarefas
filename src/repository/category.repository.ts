import { bancoDados } from "../dbConfig.js";
import { Category } from "../models/category.model.js";

export const categoryRepository = bancoDados.getRepository(Category);