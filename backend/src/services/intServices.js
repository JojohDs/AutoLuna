import { intRepository } from "../repositories/intRepositories.js";
import { veiculoRepository } from "../repositories/veiculoRepositories.js";

export const intService = {
    async getById(id){
        return await intRepository.findById(id);
    },
    async create(reqInt, veiculosId, userId){
        const veiculo = await veiculoRepository.findById(veiculosId)
        if(!veiculo) throw new Error("O veiculo não existe!")

        return await intRepository.createInteres(reqInt, veiculosId, userId)
    }, 
    async delete(id){
        const interesse = await intRepository.findById(id)
        if(!interesse){
            throw new Error("Interesse não encotrado!")
        }

        return await intRepository.delete(id)
    }
}