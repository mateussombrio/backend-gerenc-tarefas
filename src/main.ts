import "reflect-metadata";
import { bancoDados } from "./dbConfig.js";
import { App } from "./app.js";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const app = new App(port, bancoDados);
app.start();
