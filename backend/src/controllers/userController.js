import { userService } from "../services/userServices";

export const userController = {
    async getById(req, res) {
        try {
            const getUserById = await userService.getById(req.params.id)
            res.status(200).json(getUserById)
        } catch (error) {
            res.status(500).json(
                { erro: error.message }
            )
        }
    },
    async getByEmail(req, res) {
        try {
            const user = await userService.getByEmail(req.params.email);

            if (!user) {
                return res.status(404).json({
                    erro: "Usuário não encontrado!"
                });
            }

            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    },
    async getByNome(req, res) {
        try {
            const getUserByNome = await userService.getByName(req.params.nome)
            res.status(200).json(getUserByNome)
        } catch (error) {
            res.status(500).json(
                { erro: error.message }
            )
        }
    },
    async create(req, res) {
        try {
            const novoUser = await userService.create(req.body)
            res.status(201).json(novoUser)
        } catch (error) {
            res.status(400).json(
                { erro: error.message }
            )
        }
    },
    async update(req, res) {
        try {
            const userAtualizado = await userService.update(req.params.id, req.body)
            res.status(200).json(userAtualizado)
        } catch (error) {
            const status = error.message === "Usuario não encontrado!" ? 404 : 400;
            res.status(status).json(
                { erro: error.message }
            )
        }
    },
    async delete(req, res) {
        try {
            const userDeletado = await userService.delete(req.params.id)
            res.status(200).json(userDeletado)
        } catch (error) {
            const status = error.message === "Usuario não encontrado!" ? 404 : 400;
            res.status(status).json(
                { erro: error.message }
            )
        }
    }
}