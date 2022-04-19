module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.HOST,
    user: 'root',
    password: process.env.ROOT,
    database: 'themoviedb',
  },
}