import React from 'react'
import Grafico from '../../components/grafico'

const Dashboard = ({gastos,setMostrar,grafico}) => {
  return (
    <>
    <Grafico gastos={gastos} setMostrar={setMostrar} grafico={grafico} />
    </>
  )
}

export default Dashboard