import { query } from "../config/database";

export const userRepository = {
    async findById(id){
        const res = await query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return res.rows[0]
    },
    async findByNome(nome){
        const res = await query('SELECT * FROM usuarios WHERE nome = $1', [nome]);
        return res.rows[0]
    },
    async createUser(user){
        const {nome, email, senha, tipo} = user
        const sql = 'INSERT INTO usuarios ( nome, email, senha, tipo) values ($1, $2, $3, $4) returning *';
        const res = await query(sql, [nome, email, senha, tipo])
        return res.rows[0]
    },
    async updateUser(id, user){
        const {nome, email, senha, tipo} = user
        const sql = 'UPDATE usuarios SET nome = $1, email = $2, senha = $3, tipo = $4 WHERE id = $5 returning *';
        const res = await query(sql, [nome, email, senha, tipo, id])
        return res.rows[0]
    },
    async delete(id){
        const sql = ('DELETE FROM usuarios WHERE id = $1 returning *');
        const res = await query(sql, [id])
        return res.rows[0]
    }
}