import { query } from "../config/database.js";

export const intRepository = {
    async findById(id){
        const res = await query('SELECT * FROM interesses WHERE id = $1', [id])
        return res.rows[0]
    },
    async createInteres(inter, veiculosId, userId){
        const { mensagem } = inter
        const sql = 'INSERT INTO interesses ( usuario_id, veiculo_id, mensagem ) values ( $1, $2, $3 ) returning *';
        const res = await query(sql, [userId, veiculosId, mensagem])
        return res.rows[0]
    },
    async delete(id){
        const sql = 'DELETE FROM interesses WHERE id = $1 returning *'
        const res = await query(sql, [id])
        return res.rows[0]    
    }
}