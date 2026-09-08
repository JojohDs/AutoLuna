import { Router } from "express";
import { userController } from "../controllers/userController";

const router = Router();

router.get('/user/nome/:nome', userController.getByNome);
router.get('/user/:id', userController.getById);
router.get("/user/email/:email", userController.getByEmail);
router.post('/user', userController.create);
router.patch('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);
