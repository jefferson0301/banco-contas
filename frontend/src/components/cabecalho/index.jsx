import { Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cabecalho = () => {
  return (
    <Heading 
      display="flex" 
      alignItems="left" 
      justifyContent="left"
      gap="2rem"
      w="100%" 
      padding="1rem" 
      background="green" 
      color="white" 
    >
      <Link to="/" ><img  src="balanco-financeiro64.png" alt="balanco financeiro" /></Link>
      <Link to="/dashboard" ><img  src="painel-de-controle.png" alt="painel de controle" /></Link>
      
      </Heading>
  )
}

export default Cabecalho