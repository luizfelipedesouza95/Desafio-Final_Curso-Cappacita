async function salvarComentarios() {
    event.preventDefault()

    const id_filme = document.getElementById('id').innerHTML
    const nome_user = document.getElementById('nome_user').value
    const coment = document.getElementById('comentario_user').value

    const dados = {
        id: id_filme,
        nome: nome_user,
        comentario: coment
    }

    const response = await fetch(`http://localhost:3003/comentario/`, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    const content = await response.json();
    console.log(content);
}
