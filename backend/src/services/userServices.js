import { userRepository } from "../repositories/userRepositories";

export const userService = {
    async getById(id) {
        return await userRepository.findById(id);
    },
    async getByName(nome) {
        return await userRepository.findByNome(nome);
    },
    async getByEmail(email) {
        return await userRepository.findByEmail(email);
    },
    async create(reqUser) {
        return await userRepository.createUser(reqUser)
    },
    async update(id, reqUser) {
        const userExiste = await userRepository.findById(id)
        if (!userExiste) throw new Error('Usuario não encotrado!')

        return await userRepository.updateUser(id, reqUser)
    },
    async delete(id) {
        const userExiste = await userRepository.findById(id)
        if (!userExiste) throw new Error('Usuario não encontrado!')

        return await userRepository.delete(id)
    }
}