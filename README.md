# banco-contas
Esse projeto foi desenvolvido em React foi utilizado Chakra Ui para auxiliar na contrução do front-end. Essa aplicação teve como banco de dados o mysql. Esse projeto tem como finalidade auxiliar a contabilidade das contas. Sendo possível adicionar, editar, remover, pesquisar contas. Feita a soma das contas conforme a pequisa.

# Tecnicas e Tecnologias utilizadas
- React
- Java Script
- Chakra Ui
- Axios
- Mysql

# Para abrir e rodar o projeto
Para abrir o projeto na pasta api execute yarn i para instalar as dependências 
execute o comando nodemon index.js para abrir o servidor da api

# Api
#Listar todas as contas
-http://localhost:8801/
# Listar todas as contas do mês
- mes-listado pode ser: janeiro,fevereiro,março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro
-http://localhost:8801/mes-listado
# Adicionar conta
-use o método POST
-coloque a url: http://localhost:8801/
# Remover conta
-utilize o método DELETE
-id coresponde ao id da conta que será removida
-http://localhost:8801/:id
# Editar conta
-utilize o método PUT
-id coresponde ao id da conta que será editada
-http://localhost:8801/:id



  
