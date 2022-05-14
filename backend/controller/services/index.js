require('dotenv').config();
const { get } = require('axios')
const API_KEY = process.env.API_KEY

//faz a requisição da api do TMDb e retorna todos os filmes da busca
async function buscaFilmes(busca) {

   const URL_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-br&query=${busca}`

   try {

      console.log("Busca realizada com sucesso!")
      const result = await get(URL_API)
      const resposta = result.data.results
      const APIfiltrada = resposta.map(({ id, original_title, overview, poster_path, title, vote_average }) => { return { id, original_title, overview, poster_path, title, vote_average } });
      return APIfiltrada

   } catch (error) {
      console.error('Erro ao buscar filme!', error);
   }
}

//faz a requisição da api do TMDb e retorna todos os filmes do id
async function buscaFilmeId(id) {

   const URL_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`

   try {

      console.log("Filme encontrado!")
      const result = await get(URL_API)
      const resposta = result.data

      const filtroDados = {
         id: resposta.id,
         Titulo_en: resposta.original_title,
         Descrição: resposta.overview,
         Capa: resposta.poster_path,
         Titulo_pt: resposta.title,
         Classificação: resposta.vote_average
      }

      return filtroDados

   } catch (error) {
      console.error('Erro ao procurar filme por ID!', error);
   }
}

module.exports = { buscaFilmes, buscaFilmeId }