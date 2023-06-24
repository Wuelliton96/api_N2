import { INTEGER } from "sequelize";
import prestador from "../models/prestador_model.js";

const controle = {
//busca todos os prestador registrado por método
    getPrestadoress : async (req, res) =>{
    try{
        const prestadores = await prestador.findAll();
        res.send(prestadores)
    }catch (e){
        console.log("Erro ap acessar a tabela prestadores",e)
    }
}, 

//Buscando por cpf
    getPrestadores : async (req,res) => {
    try{
        const cpf_prestador = req.params.cpf;
        const prestadores = await prestador.findAll({ where: { cpf_prestador } });
        res.send(prestadores)
    }catch (e){
        console.log("Erro ao acessar a tabela prestadores",e)
    }
},

//Criando um novo prestador
    createPrestador : async (req, res) => {
    try{
    await prestador.create(req.body);
    res.json({
        "messagem":"Um novo registro de prestador foi inserido"
    })
    }
    catch (e){
        console.log("Erro ao inserir um novo prestador",e)
    }
},


// Atualizar um prestador existente
    updatePrestador : async (req, res) => {
    try {
    const codigo_prestador = req.params.id;
    await prestador.update(req.body,{ where: { codigo_prestador }});
    res.json({
        "message": "Registro de prestador foi atualizado"
    })
    } 
    catch (e) {
    console.log("Erro ao atualizar o prestador", e);
    }
},
    
    // Excluir um prestador existente
    deletePrestador : async (req, res) => {
    try {
    const codigo_prestador = req.params.id;
    await prestador.destroy({ where: { codigo_prestador } });
    res.json({
        "message": "Registro de prestador foi excluído"
    });
    } 
    catch (e) {
        console.log("Erro ao excluir o prestador", e);
    }
}
}

export default controle