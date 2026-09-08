import { Router } from "express";
import { userController } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/:nome', userController.getByNome);
userRouter.get('/:id', userController.getById);
userRouter.get("/:email", userController.getByEmail);
userRouter.post('/', userController.create);
userRouter.post('/login', userController.login)
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter