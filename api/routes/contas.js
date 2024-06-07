import express from "express";
import {getContas,getContasMesCalcularTotal,  getContasAnoCalcularTotal, addConta, getContasMes, deleteConta, updateConta, calcularTotalContasMes} from "../controllers/conta.js"

const router = express.Router()

router.get("/", getContas)

//essa rota retorna o par mes e valor gasto no mes para todos os meses
router.get("/total", calcularTotalContasMes)

//essa rota retorna o total de gastos no mes
router.get("/balancoano", getContasAnoCalcularTotal)

//essa rota pesquisa todos as despesas de determinado mês
router.get("/balanco/:mes", getContasMesCalcularTotal)

//essa rota pesquisa todos as despesas de determinado mês
router.get("/:mes", getContasMes)




router.post("/", addConta)

router.delete("/:id", deleteConta)

router.put("/:id", updateConta)

export default router