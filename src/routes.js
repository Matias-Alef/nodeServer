import { Router} from "express";

import HelloController from "./controllers/HelloController.js";

const routes = new Router();

routes.get("/hi", HelloController.index);

export default new routes;