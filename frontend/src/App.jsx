import { useEffect, useState } from "react"
import axios from "axios";

import { Heading } from "@chakra-ui/react"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grafico from "./components/grafico/index.jsx";
import Cabecalho from "./components/cabecalho/index.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Principal from "./pages/principal/index.jsx";

import Tabela from "../src/components/tabela/index.jsx"


function App() {
 
  const [gastos, setGastos] = useState(0)
  const [contas, setContas] = useState([])
  const [onEdit, setOnEdit] = useState(false)
  const [grafico, setGrafico] = useState()
  const [mostrar, setMostrar] = useState(true)
  

  let auxGrafico = [
    {
      "total_mes": 0,
      "mes": 'janeiro'
    },
    {
      "total_mes": 0,
      "mes": 'fevereiro'
    },
    {
      "total_mes": 0,
      "mes": 'março'
    },
    {
      "total_mes": 0,
      "mes": 'abril'
    },
    {
      "total_mes": 0,
      "mes": 'maio'
    },
    {
      "total_mes": 0,
      "mes": 'junho'
    },
    {
      "total_mes": 0,
      "mes": 'julho'
    },
    {
      "total_mes": 0,
      "mes": 'agosto'
    },
    {
      "total_mes": 0,
      "mes": 'setembro'
    },
    {
      "total_mes": 0,
      "mes": 'outubro'
    },
    {
      "total_mes": 0,
      "mes": 'novembro'
    },
    {
      "total_mes": 0,
      "mes": 'dezembro'
    }
  ]
  

  const getContas = async () => {
    try {
      const res = await axios.get("http://localhost:8801/")
      setContas(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
      calcularGastos(contas)
      
    } catch (error) {
      console.log(error)
    }
  }

  const calcularGastos = async () => {
    
    try {
      const res = await axios.get("http://localhost:8801/total")
      //setGrafico(res.data)
      console.log(res.data)
      for(let i = 0; i<res.data.length;i++){
        if(res.data[i].mes === 'janeiro'){
          auxGrafico[0].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'fevereiro'){
          auxGrafico[1].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'março'){
          auxGrafico[2].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'abril'){
          auxGrafico[3].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'maio'){
          auxGrafico[4].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'junho'){
          auxGrafico[5].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'julho'){
          auxGrafico[6].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'agosto'){
          auxGrafico[7].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'setembro'){
          auxGrafico[8].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'outubro'){
          auxGrafico[9].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'novembro'){
          auxGrafico[10].total_mes = res.data[i].total_mes
          
        }
        if(res.data[i].mes === 'dezembro'){
          auxGrafico[11].total_mes = res.data[i].total_mes
          
        }
      }
      console.log(auxGrafico)
      setGrafico(auxGrafico)
    } catch (error) {
      console.log(error)
    }
    
  }

  const totalGastos = async () => {
    try {
      const res = await axios.get("http://localhost:8801/balancoano")
      setGastos(res.data[0].total)
      
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getContas()
    calcularGastos(contas)
    totalGastos()
    setMostrar(true)
  },[setContas])

  return (
    <>
    <BrowserRouter>
    <Cabecalho/>
      <Routes>
        <Route path="/" element={<Principal 
          calcularGastos={calcularGastos}
          gastos={gastos}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          contas={setOnEdit} 
          setContas={setContas}
          setGastos={setGastos}
          setMostrar={setMostrar}
        />} />
        <Route path="dashboard" element={<Grafico setMostrar={setMostrar} grafico={grafico}/> } />
        
      </Routes>  
      {mostrar && <Tabela  
        contas={contas} 
        onEdit={onEdit} 
        setOnEdit={setOnEdit}  
      /> }  
      {mostrar && <Heading textAlign="center" > Total: {gastos}</Heading> }     

       <ToastContainer autoClose={3000}  />
      </BrowserRouter>
    </>
  )
}


export default App
