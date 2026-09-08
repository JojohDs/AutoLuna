import { query } from "../config/database";

export const veiculoRepository = {

    async findAll() {
        const res = await query(
            "SELECT * FROM veiculos ORDER BY id DESC"
        );

        return res.rows;
    },

    async findById(id) {
        const res = await query(
            "SELECT * FROM veiculos WHERE id = $1",
            [id]
        );

        return res.rows[0];
    },

    async create(veiculo) {

        const {
            marca,
            modelo,
            ano,
            quilometragem,
            preco,
            cor,
            combustivel,
            cambio,
            categoria,
            descricao,
            imagem
        } = veiculo;

        const sql = `
            INSERT INTO veiculos (
                marca,
                modelo,
                ano,
                quilometragem,
                preco,
                cor,
                combustivel,
                cambio,
                categoria,
                descricao,
                imagem
            )
            VALUES (
                $1, $2, $3, $4, $5,
                $6, $7, $8, $9, $10, $11
            )
            RETURNING *
        `;

        const res = await query(sql, [
            marca,
            modelo,
            ano,
            quilometragem,
            preco,
            cor,
            combustivel,
            cambio,
            categoria,
            descricao,
            imagem
        ]);

        return res.rows[0];
    },

    async update(id, veiculo) {

        const {
            quilometragem,
            preco,
            cor,
            combustivel,
            status
        } = veiculo;

        const sql = `
            UPDATE veiculos
            SET
                quilometragem = $1,
                preco = $2,
                cor = $3,
                combustivel = $4,
                status = $5
            WHERE id = $6
            RETURNING *
        `;

        const res = await query(sql, [
            quilometragem,
            preco,
            cor,
            combustivel,
            status,
            id
        ]);

        return res.rows[0];
    },

    async delete(id) {

        const sql = `
            DELETE FROM veiculos
            WHERE id = $1
            RETURNING *
        `;

        const res = await query(sql, [id]);

        return res.rows[0];
    }
};