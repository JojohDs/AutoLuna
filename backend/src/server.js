import express from "express";
import cors from "cors";
import veiculoRouter from "./routes/veiculoRoutes.js";
import userRouter from "./routes/userRoutes.js";
import intRouter from "./routes/intRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/user", userRouter)
app.use("/veiculos", veiculoRouter)
app.use("/int", intRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})