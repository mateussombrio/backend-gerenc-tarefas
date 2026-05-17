import "reflect-metadata";
import { bancoDados } from "./dbConfig.js";
import { App } from "./app.js";

const app = new App(3000, bancoDados);
app.start();
