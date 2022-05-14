require("dotenv").config();
const cors = require('cors')
const express = require("express")
const app = express()
const services = require(`./controller/services/index.js`)
const path = require('path');
const DataBase = require("../backend/model/dataBase");
const urlencoded = express.urlencoded({ extended: true })
const PORT = 3004;

app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*")
     app.use(cors());
     next();
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/pages'));

app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));

//rota para buscar o id do filme e retorna os dados para pagina de detalhes
app.get("/detalhes/:id", urlencoded, async function (req, res) {
     const IMGPATH = "https://image.tmdb.org/t/p/w500/"
     const detalhesFilme = await services.buscaFilmeId(req.params.id)
     res.render("./main", { pageInicial: './pag_detalhes.ejs', detalhesFilme, IMGPATH })
})

//rota para buscar todos os filmes relacionados a pesquisa
app.get("/filmes/:busca", urlencoded, async (req, res) => {
     res.json(await services.buscaFilmes(req.params.busca))
})

//rota para salvar um comentario no banco de dados
app.post('/comentario/', urlencoded, async (req, res) => {
     const dados = await DataBase.salvarComentarios({
          id: req.body.id,
          nome: req.body.nome,
          comentario: req.body.comentario
     });
     res.send(dados);
     console.log("server", dados);
})

//rota para buscar comentarios do banco de dados
app.get("/busca/comentario/:id", urlencoded, async (req, res) => {
     res.send(await DataBase.buscaComentario(req.params.id))
})

//rota da pagina incial
app.get("/", function (req, res) {
     res.render("./main", { pageInicial: './layouts/index.ejs' })
})

app.listen(PORT, () => { console.log(`SERVIDOR ONLINE --> http://localhost:${PORT}/`)
})

///////////////////NAO ESTA USANDO NO PROJETO(TESTE)////////////////////
//rota para buscar um filme pelo id
app.get("/filme/:id", urlencoded, async function (req, res) {
     res.json(await services.buscaFilmeId(req.params.id))
})