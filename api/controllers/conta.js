import {db} from "../db.js"

const MESES_ANO = ["janeiro","fevereiro", "março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

export const getContas = (_, res) => {
    const q = "SELECT * FROM contas"

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    } )
}

export const getContasMes = (req, res) => {
    const mes = req.params.mes
    // if(!MESES_ANO.includes(mes)){
    //     return res.status(400).json("Insira um mês válido")
    // }
    const q = `SELECT * FROM contas WHERE mes = "${mes}"`
    

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
        // let total = 0
        // for(let i = 0; i < data.length; i++ ) {
        //     total = total + data[i].valor
        // }
        // return res.status(200).json(`{total: ${total} }`)
        
    } )
}

export const calcularTotalContasMes = (req, res) => {
    const q = "SELECT SUM(valor) AS total_mes , mes FROM contas GROUP BY mes"
    //const q = "SELECT * FROM contas"

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    } )
}

export const getContasAnoCalcularTotal = (req, res) => {
    const mes = req.params.mes
    // if(!MESES_ANO.includes(mes)){
    //     return res.status(400).json("Insira um mês válido")
    // }
    const q = "SELECT SUM(valor) AS total FROM contas "
    //const q = `SELECT * FROM contas WHERE mes = "${mes}"`
    

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        //return res.status(200).json(data)
        // let total = 0
        // for(let i = 0; i < data.length; i++ ) {
        //     total = total + data[i].valor
        // }
        //return res.status(200).json(`{total: ${total} }`)
        return res.status(200).json(data)
        
    } )
}

export const getContasMesCalcularTotal = (req, res) => {
    const mes = req.params.mes
    // if(!MESES_ANO.includes(mes)){
    //     return res.status(400).json("Insira um mês válido")
    // }
    const q = `SELECT SUM(valor) AS total FROM contas WHERE mes = "${mes}" `
    //const q = `SELECT * FROM contas WHERE mes = "${mes}"`
    

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        //return res.status(200).json(data)
        // let total = 0
        // for(let i = 0; i < data.length; i++ ) {
        //     total = total + data[i].valor
        // }
        //return res.status(200).json(`{total: ${total} }`)
        return res.status(200).json(data)
        
    } )
}

export const addConta = (req, res) => {
    const q = "INSERT INTO contas(`nome`, `mes`, `valor`) VALUES(?)"

    const values = [
        req.body.nome,
        req.body.mes,
        req.body.valor,
    ]

    //validações
    if(values[0] === "" || values[0] === undefined  ){
        return res.status(400).json("o campo nome não pode ser vazio")
    }
    if(values[0].length < 3){
        return res.status(400).json("Coloque um nome com pelo menos 3 caracteres")
    }
    if(values[1] === "" || values[1] === undefined ){
        return res.status(400).json("o campo mes não pode ser vazio")
    }
    if(values[2] === "" || values[2] === undefined){
        return res.status(400).json("o campo valor não pode ser vazio ")
    }
    if(values[2]<0){
        return res.status(400).json("o campo valor não pode ser menor que zero ")
    }

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("conta adiciona com sucesso")
    } )
}

export const deleteConta = (req, res) => {
    const id = req.params.id
    // if(typeof  id == "string"){
    //     return res.status(400).json("coloque um número caracteres não são permitidos")
    // }

    const q = `DELETE  FROM contas WHERE id = ${id}`
    
    db.query(q, [id], (err) => {
        if(err)
            return res.status(400).json(err)

        return res.status(200).json("Conta removida com sucesso")
    } )
}

export const updateConta = (req, res) => {
    const id = req.params.id

    const novoNome = req.body.nome
    const novoMes = req.body.mes
    const novoValor = req.body.valor

    const q =  `UPDATE contas SET nome = "${novoNome}" , mes = "${novoMes}" , valor = ${novoValor} WHERE id = ${id}`

    const values = [
        novoNome,
        novoMes,
        novoValor,
      ];
    
      db.query(q, [...values, id], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Conta atualizada com sucesso.");
      });
    
    
}