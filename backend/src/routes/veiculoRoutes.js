import { Router } from 'express';
import { veiculoController } from '../controllers/veiculoController';

const router = Router();

router.get("/", veiculoController.getAll);
router.get("/:id", veiculoController.getById);
router.post("/", veiculoController.create);
router.put("/:id", veiculoController.updateVeiculo);
router.delete("/:id", veiculoController.delete);

export default router