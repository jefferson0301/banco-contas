import { Heading, VStack } from "@chakra-ui/react"
import Formulario from "./components/formulario/index.jsx"
import Tabela from "./components/tabela/index.jsx"
import { useEffect, useState } from "react"
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
 
  const [gastos, setGastos] = useState(0)
  const [contas, setContas] = useState([])
  const [onEdit, setOnEdit] = useState(false)

  const getContas = async () => {
    try {
      const res = await axios.get("http://localhost:8801/")
      setContas(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
      //console.log(contas)
      
    } catch (error) {
      console.log(error)
    }
  }

  const calcularGastos = (contas) => {
    let i = 0
    let totalGastos = 0
    for(i=0; i<contas.length ; i++){
      totalGastos = totalGastos + contas[i].valor
    }
    setGastos(totalGastos)
  }

  useEffect(() => {
    getContas()
    calcularGastos(contas)
  },[setContas])

  return (
    <>
      <VStack width="100%" >
        <Formulario calcularGastos={calcularGastos} gastos={gastos} setGastos={setGastos} contas={contas} onEdit={onEdit} setContas={setContas} setOnEdit={setOnEdit} />
         <Tabela gastos={gastos} contas={contas} onEdit={onEdit} setOnEdit={setOnEdit}  /> 
         <ToastContainer autoClose={3000}  />
         <Heading> Total: {gastos}</Heading>
      </VStack>
    </>
  )
}

export default App
