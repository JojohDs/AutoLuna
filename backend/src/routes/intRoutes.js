import { Router } from "express";
import { intController } from "../controllers/intController.js";

const intRouter = Router();

intRouter.get('/:id', intController.getById);
intRouter.post('', intController.create);
intRouter.delete('/:id', intController.delete);

export default intRouter