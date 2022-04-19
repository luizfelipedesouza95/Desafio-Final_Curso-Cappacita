const { connectionDataBase } = require('./connection')

async function salvarComentarios(dados) {

    const InsertComentarios = {
        id: dados.id,
        nome: dados.nome,
        comentario: dados.comentario
    }
    
    console.log("database", InsertComentarios)

    const result = await connectionDataBase(`themoviedb.comentarios`).insert(InsertComentarios);
    if (result) {
        return {
            ...dados,
        }
    } else {
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção!"
        }
    }
}



async function buscaComentario(id) {
    const result = await connectionDataBase(`themoviedb.comentarios`).where({ id: id });
    console.log(result);
    return result
}
module.exports = { salvarComentarios, buscaComentario }