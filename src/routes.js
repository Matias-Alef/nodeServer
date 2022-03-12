
import { Router } from "express"
import HelloController from "./controllers/helloController.js";


const routes = new Router();

routes.get("/hello", HelloController.index);

export default routes;