import { veiculoRepository } from "../repositories/veiculoRepositories";

export const veiculoService = {
    async getAll(){
        return await veiculoRepository.findAll();
    },
    async getById(id){
        return await veiculoRepository.findById(id);
    },
    async create(reqVeiculos){
        return await veiculoRepository.create(reqVeiculos)
    },
    async update(id, reqVeiculos){
        const veiculosExiste = await veiculoRepository.findById(id)
        if (!veiculosExiste) throw new Error('Veiculo não encontrado!')

        return await veiculoRepository.update(id, reqVeiculos);
    },
    async delete(id){
        const veiculoDeletado = veiculoRepository.delete(id)
        if(!veiculoDeletado) throw new Error('Veiculo não existe!')
    }
}