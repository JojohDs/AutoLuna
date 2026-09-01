import express from "express";
import router from "./routes/veiculoRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express());
app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})