async function buscaComentarios() {
    try {
        const response = await fetch(`http://localhost:3003/busca/comentario/`)
        const result = await response.json()
        console.log(result);

    } catch (error) {
        console.error("HÁ ALGO ERRADO")
    }
}