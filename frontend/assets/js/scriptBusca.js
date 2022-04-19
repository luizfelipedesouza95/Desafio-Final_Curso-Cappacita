async function buscaComentarios() {
    try {

        const busca = document.getElementById('id')
        const id = busca.innerHTML
        const response = await fetch(`http://localhost:3003/busca/comentario/${id}`)
        const result = await response.json()
        console.log(result)

        result.forEach((dados) => {

            const comentario = document.getElementById('coment')

            const div = document.createElement('div')
            div.className = "container m-2"
            div.id = "div_coment"

            const div2 = document.createElement('div')
            div2.className = "d-flex"

            const p = document.createElement('p')
            p.id = "nomeUser"
            p.innerHTML = ` ${dados.nome}`
            p.className = "m-2"

            const img = document.createElement('img')
            img.src = "../../assets/images/usuario.jpeg"
            img.id = "foto_user"
            img.className = "m-1"

            const p2 = document.createElement('p')
            p2.id = "user_coment"
            p2.className = "list-group-item m-1"
            p2.innerHTML = ` ${dados.comentario}`

            div.appendChild(div2)
            div2.appendChild(img)
            div2.appendChild(p)
            div.appendChild(p2)

            comentario.appendChild(div)

        })
    } catch (error) {
        console.error("HÁ ALGO ERRADO")
    }
}

buscaComentarios()