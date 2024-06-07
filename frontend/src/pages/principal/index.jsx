
import Formulario from "../../components/formulario/index.jsx"
//import Tabela from "/src/components/tabela/index.jsx"

const Principal = ({calcularGastos,gastos,onEdit,setOnEdit,contas,setContas,setGastos, setMostrar}) => {
    setMostrar(true)
    console.log(contas)
    return (
    <>
    <Formulario 
        calcularGastos={calcularGastos} 
        gastos={gastos} 
        setGastos={setGastos} 
        contas={contas} 
        onEdit={onEdit} 
        setContas={setContas} 
        setOnEdit={setOnEdit} 
    />
    {/* <Tabela  
        contas={contas} 
        onEdit={onEdit} 
        setOnEdit={setOnEdit}  
      /> */}
    
    </>
  )
}

export default Principal