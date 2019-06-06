import axios from 'axios'

const getMovies = async () => {
  const result = await axios.get('http://localhost:8080/movies')
  return result.data
}
const getMoviesById = async (id) => {
  const result = await axios.get(`http://localhost:8080/movies/${id}`)
  return result.data
}
export default {
  getMovies,
  getMoviesById,
}
