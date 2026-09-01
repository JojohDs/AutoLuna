import { intService } from "../services/intServices";

export const intController = {
    async getById(req, res){
        try {
            const getById = await intService.getById(req.params.id)
            res.status(200).json(getById)
        } catch (error) {
            res.status(500).json*
            {erro: error.message}
        }
    },
    async create(req, res){
        try {
            const novoInt = await intService.create(req.body, req.body.veiculo_id, req.user.id)
            res.status(201).json(novoInt)
        } catch (error) {
            res.status(400).json(
                {erro: error.message}
            )
        }
    },
    async delete(req, res){
        try {
            const intDeletado = await intService.delete(req.params.id)
            res.status(200).json(intDeletado)
        } catch (error) {
            const status = error.message === "Interesse não encontrado!" ? 404 : 400;
            res.status(status).json(
                {erro: error.message}
            )
        }
    }
}