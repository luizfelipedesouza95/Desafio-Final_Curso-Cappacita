const axios = require('axios')
require('dotenv').config();
const API_KEY = process.env.API_KEY

//faz a requisição da api do TMDb e retorna todos os filmes da busca
async function buscaFilmes(busca) {
   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-br&query=${busca}`)
   const resposta = response.data.results
   const APIfiltrada = resposta.map(({ id, original_title, overview, poster_path, title, vote_average }) => { return { id, original_title, overview, poster_path, title, vote_average } });
   return APIfiltrada
}

//faz a requisição da api do TMDb e retorna todos os filmes do id
async function buscaFilmeId(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`)
   return response.data
}

module.exports = { buscaFilmes, buscaFilmeId }