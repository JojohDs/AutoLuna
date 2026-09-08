import { Router } from "express";
import { intController } from "../controllers/intController";

const router = Router();

router.get('/int/:id', intController.getById);
router.post('/int', intController.create);
router.delete('/int/:id', intController.delete);