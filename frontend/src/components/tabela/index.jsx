import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import axios from "axios";


const Tabela = ({contas, setOnEdit ,onEdit}) => {

    const handleDelete = async (id) => {
        await axios.delete("http://localhost:8801/"+id)
          .then(({data}) => toast.success("Conta removida com sucesso") )
          .catch( ({data}) => toast.error("Ocorreu um erro:"+data) )
    } 
    
return (
    
    <TableContainer width="80%" borderRadius="5px" marginTop="2rem" >
    <Table   >
      <Thead backgroundColor="gray"  >
        <Th color="white" textAlign="center" >Nome</Th>
        <Th color="white" textAlign="center" >Valor</Th>
        <Th color="white" textAlign="center" >Ações</Th>
      </Thead>
      <Tbody>
      {contas.map( (conta,i) => (
        <Tr key={i} >
          <Td textAlign="center" >{conta.nome}</Td>
          <Td textAlign="center" >{conta.valor}</Td>
          <Td textAlign="center" display="flex" gap="1rem" alignItems="center" justifyContent="center" >
            <Button 
              colorScheme='red' 
              onClick={() => handleDelete(conta.id) }
            >Deletar</Button>  
            <Button 
              color="white" 
              colorScheme='yellow' 
              onClick={() => setOnEdit(conta) }
            >Editar</Button> 
          </Td>
        </Tr>
      ))}
        
      </Tbody>
    </Table>
   </TableContainer>
  )
}

export default Tabela