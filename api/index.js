import express from "express"
import contasRoutes from "./routes/contas.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", contasRoutes)

app.listen(8801)