async function getContent() {
    try {
        const IMGPATH = "https://image.tmdb.org/t/p/w500/"
        const listafilmes = document.getElementById('result-filmes')
        listafilmes.innerHTML = ""
        const busca = document.getElementById('pesquisa')
        const nome = busca.value
        const response = await fetch(`http://localhost:3003/filmes/${nome}`)
        const result = await response.json()

        result.forEach((filmes) => { 
            const nodeId = filmes.id

            const divmain = document.createElement('div')
            divmain.className = "col-md-3 m-4 p-0"
            divmain.id = "filmes"

            const divcard = document.createElement('div')
            divcard.id = "cards"

            const img = document.createElement('img')
            img.src = IMGPATH + filmes.poster_path
            img.className = "card-img-top"
            img.id = "capa_filme"

            const h5 = document.createElement('h5')
            h5.className = "card-title"
            h5.innerHTML = `${filmes.original_title}`

            const botaoDetalhes = document.createElement('a')
            botaoDetalhes.className = "btn container-fluid btn-primary"
            botaoDetalhes.innerHTML = `Detalhes`
            botaoDetalhes.href = "/detalhes/" + nodeId

            const notas = document.createElement('h3')
            notas.className = "title p-1"
            notas.innerHTML = `Nota: ${filmes.vote_average}`

            divcard.appendChild(img)
            divcard.appendChild(h5)
            divcard.appendChild(notas)
            divcard.appendChild(botaoDetalhes)
            divmain.appendChild(divcard)
            listafilmes.appendChild(divmain)

            busca.value = ""
        })
    } catch (error) {
        console.error("HÁ ALGO ERRADO")
    }
}

    const form_pesquisa = document.getElementById('pesq');
    form_pesquisa.addEventListener('submit', (e) => {
        e.preventDefault();
        getContent()
    })
