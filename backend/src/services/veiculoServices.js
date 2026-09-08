import { veiculoRepository } from "../repositories/veiculoRepositories.js";

export const veiculoService = {

    async getAll() {
        return await veiculoRepository.findAll();
    },

    async getById(id) {
        return await veiculoRepository.findById(id);
    },

    async create(reqVeiculo) {
        return await veiculoRepository.create(reqVeiculo);
    },

    async update(id, reqVeiculo) {

        const veiculoExiste = await veiculoRepository.findById(id);

        if (!veiculoExiste) {
            throw new Error("Veículo não encontrado!");
        }

        return await veiculoRepository.update(id, reqVeiculo);
    },

    async delete(id) {

        const veiculoExiste = await veiculoRepository.findById(id);

        if (!veiculoExiste) {
            throw new Error("Veículo não encontrado!");
        }

        return await veiculoRepository.delete(id);
    }
};