const pool = require("../config/database");

// LISTAR
async function listarVeiculos(req, res) {
  try {
    const result = await pool.query(`
      SELECT 
        v.*,
        u.nome AS usuario_nome
      FROM veiculos v
      JOIN usuarios u ON u.id = v.usuario_id
      ORDER BY v.id DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao listar veículos" });
  }
}

// BUSCAR POR ID
async function buscarVeiculo(req, res) {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT 
        v.*,
        u.nome AS usuario_nome
      FROM veiculos v
      JOIN usuarios u ON u.id = v.usuario_id
      WHERE v.id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        erro: "Veículo não encontrado",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar veículo" });
  }
}

// CADASTRAR
async function criarVeiculo(req, res) {
  try {
    const {
      usuario_id,
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
      imagem,
      status,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO veiculos (
        usuario_id,
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
        imagem,
        status
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7,
        $8, $9, $10, $11, $12, $13
      )
      RETURNING *
      `,
      [
        usuario_id,
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
        imagem,
        status || "Disponível",
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao cadastrar veículo" });
  }
}

// ATUALIZAR
async function atualizarVeiculo(req, res) {
  try {
    const { id } = req.params;

    const {
      usuario_id,
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
      imagem,
      status,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE veiculos
      SET
        usuario_id = $1,
        marca = $2,
        modelo = $3,
        ano = $4,
        quilometragem = $5,
        preco = $6,
        cor = $7,
        combustivel = $8,
        cambio = $9,
        categoria = $10,
        descricao = $11,
        imagem = $12,
        status = $13
      WHERE id = $14
      RETURNING *
      `,
      [
        usuario_id,
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
        imagem,
        status,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        erro: "Veículo não encontrado",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao atualizar veículo" });
  }
}

// EXCLUIR
async function excluirVeiculo(req, res) {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM veiculos WHERE id = $1 RETURNING id",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        erro: "Veículo não encontrado",
      });
    }

    res.json({
      mensagem: "Veículo excluído com sucesso",
    });
  } catch (error) {
  console.error("ERRO AO CADASTRAR:", error);

  res.status(500).json({
    erro: error.message
  });
}
}

module.exports = {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  excluirVeiculo,
};