import { intRepository } from "../repositories/intRepositories";

export const intService = {
    async getById(id){
        return await intRepository.findById(id);
    },
    async create(reqInt, veiculosId, userId){
        const veiculo = await intRepository.getById(veiculosId)
        if(!veiculo) throw new Error("O veiculo não existe!")

        return await intRepository.createInteres(reqInt, veiculosId, userId)
    }, 
    async delete(id){
        return await intRepository.delete(id)
    }
}