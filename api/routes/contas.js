import express from "express";
import {getContas, getContasMesCalcularTotal, addConta, getContasMes, deleteConta, updateConta} from "../controllers/conta.js"

const router = express.Router()

router.get("/", getContas)

//essa rota pesquisa todos as despesas de determinado mês
router.get("/:mes", getContasMes)

//essa rota retorna o total de gastos no mes
router.get("/balanco/:mes", getContasMesCalcularTotal)

router.post("/", addConta)

router.delete("/:id", deleteConta)

router.put("/:id", updateConta)

export default router