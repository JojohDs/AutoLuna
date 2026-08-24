const express = require("express");

const router = express.Router();

const {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  excluirVeiculo,
} = require("../controllers/veiculoController");

router.get("/", listarVeiculos);
router.get("/:id", buscarVeiculo);
router.post("/", criarVeiculo);
router.put("/:id", atualizarVeiculo);
router.delete("/:id", excluirVeiculo);

module.exports = router;