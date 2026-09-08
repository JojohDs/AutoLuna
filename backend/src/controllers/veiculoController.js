import { veiculoService } from "../services/veiculoServices";

export const veiculoController = {

    async getAll(req, res) {
        try {
            const veiculos = await veiculoService.getAll();

            res.status(200).json(veiculos);

        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    },

    async getById(req, res) {
        try {
            const veiculo = await veiculoService.getById(req.params.id);

            if (!veiculo) {
                return res.status(404).json({
                    erro: "Veículo não encontrado!"
                });
            }

            res.status(200).json(veiculo);

        } catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    },

    async create(req, res) {
        try {
            const novoVeiculo = await veiculoService.create(req.body);

            res.status(201).json(novoVeiculo);

        } catch (error) {
            res.status(400).json({
                erro: error.message
            });
        }
    },

    async updateVeiculo(req, res) {
        try {
            const veiculoAtualizado = await veiculoService.update(
                req.params.id,
                req.body
            );

            res.status(200).json(veiculoAtualizado);

        } catch (error) {
            const status =
                error.message === "Veículo não encontrado!"
                    ? 404
                    : 400;

            res.status(status).json({
                erro: error.message
            });
        }
    },

    async delete(req, res) {
        try {
            const veiculoDeletado = await veiculoService.delete(
                req.params.id
            );

            res.status(200).json(veiculoDeletado);

        } catch (error) {
            const status =
                error.message === "Veículo não encontrado!"
                    ? 404
                    : 400;

            res.status(status).json({
                erro: error.message
            });
        }
    }
};