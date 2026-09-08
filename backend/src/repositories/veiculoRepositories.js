import { query } from "../config/database";

export const veiculoRepository = {
    async findAll(){
        const res = await query('SELECT * FROM veiculos');
        return res.rows
    },
    async findById(id){
        const res = await query('SELECT * FROM veiculos WHERE id = $1', [id])
        return res.rows[0]
    },
    async create(veiculo){
        const { marca, modelo, ano, quilometragem, preco, cor, combustivel, cambio, categoria, descricao, imagem } = veiculo;
        const sql = 'INSERT INTO veiculos (marca, modelo, ano, quilometragem, preco, cor, combustivel, cambio, categoria, descricao, imagem) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *';
        const res = await query(sql, [marca, modelo, ano, quilometragem, preco, cor ,combustivel, cambio, categoria, descricao, imagem])
        return res.rows[0]
    },
    async update(id, veiculo){
        const {quilometragem, preco, cor, combustivel } = veiculo
        const sql = 'UPDATE veiculos SET quilometragem = $1, preco = $2, cor = $3, combustivel = $4 WHERE id = $5 returning *;';
        const res = await query(sql, [quilometragem, preco, cor, combustivel, id])
        return res.rows[0]
    },
    async delete(id){
        const sql = 'DELETE FROM veiculos WHERE id = $1 returning *';
        const res = await query(sql, [id]);
        return res.rows[0]
    }
}