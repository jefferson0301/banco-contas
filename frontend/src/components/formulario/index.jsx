import { Button, FormLabel, Input, Select} from "@chakra-ui/react"
import { useState } from "react"
import styles from "./Formulario.module.css"
import axios from "axios";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Formulario = ({calcularGastos,contas, setOnEdit ,onEdit, setContas, setGastos, gastos}) => {

  const MESES_ANO = ["janeiro","fevereiro", "março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

  
  const [onSearch, setOnSearch] = useState(null)
  const [nome, setNome] = useState("")
  const [mes, setMes] = useState("")
  const [valor, setValor] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const conta = {
      nome,
      mes,
      valor
    }

    //clear
    setNome("")
    setValor("")
    setMes("")

    if(onSearch){
      await axios.get("http://localhost:8801/"+onSearch,)
        .then(({data}) => {
          toast.success(`Pesquisa das contas do mês: ${onSearch} feitas com sucesso`)
          calcularGastos(data)   
          setContas(data)
        }  )
        .catch( ({err}) => toast.error("Erro"+err) )
      setOnSearch(null)
    }

    if(onEdit){
      
      console.log(onEdit)
      await axios.put("http://localhost:8801/" +onEdit.id, {
        nome: conta.nome,
          mes:conta.mes,
          valor: conta.valor
      })
      .then( ({data}) => {
        toast.success("usuário modificado com sucesso"+data)
        setContas(contas)
      }  )
      .catch( ({data}) => toast.error(err) ) 

      setOnEdit(null)
    }else{
      await axios.post("http://localhost:8801/", {
          nome: conta.nome,
          mes:conta.mes,
          valor: conta.valor
      })
      .then( ({data}) => toast.success('Conta adicionada com sucesso'))
      .catch( ({data}) => toast.error(err))
      
    }

    
  }

  return (
  
   <form  className={styles.formulario} onSubmit={handleSubmit} >
    {/* w={["70%","80%","90%","90%"]} display="flex" alignItems="center" justifyContent="center" flexDirection={["column","column","column","row"]} */}
    <FormLabel  >Nome</FormLabel>
    <Input 
      className={styles.input}
      placeholder="Descreva a despesa" 
      type="text" onChange={(e) => setNome(e.target.value) }
      value={nome}
    />
    <FormLabel   >Mes</FormLabel>
    <Select className={styles.input}  placeholder="Selecione o mês" value={mes}  onChange={(e) => setMes(e.target.value)} >
      {MESES_ANO.map( (mes) => (
        <option key={mes} value={mes}  >{mes}</option>
      ))}
    </Select>
    <FormLabel   >Valor</FormLabel>
    <Input 
     className={styles.input}
      placeholder="valor da despesa" 
      type="number" onChange={(e) => setValor(e.target.value) } 
      value={valor}
    />
    <div className={styles.card_botoes} >
      <Button w="220px" type="submit" colorScheme='teal' size='xs'  height="40px" > Adicionar </Button>
      <Button w="220px" onClick={() => setOnSearch(mes) } type="submit" colorScheme='teal' size='xs'  height="40px" > Pesquisar </Button>
    </div>
   </form>
   
  )
}

export default Formulario