import { Router } from 'express';
import { veiculoController } from '../controllers/veiculoController.js';

const veiculoRouter = Router();

veiculoRouter.get('', veiculoController.getAll);
veiculoRouter.get('/:id', veiculoController.getById);
veiculoRouter.post('/', veiculoController.create);
veiculoRouter.put('/:id', veiculoController.updateVeiculo);
veiculoRouter.delete('/:id', veiculoController.delete);

export default veiculoRouter