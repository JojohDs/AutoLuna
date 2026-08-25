const express = require("express");
const cors = require("cors");

const veiculoRoutes = require("./routes/veiculoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/veiculos", veiculoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});