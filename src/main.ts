import "reflect-metadata";
import { Task } from "./models/task.model.js";
import { bancoDados } from "./dbConfig.js";

bancoDados
  .initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
