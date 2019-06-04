import Axios from 'axios';

const getMovies = async () => {
  const result = await Axios.get('http://localhost:8080/movies')
  return result.data
}

const getMoviesByID = async () => {
  const result = await Axios.get('http://localhost:8080/movies/:id')
  return result.data
}

export default {
  getMovies,
  getMoviesByID,
}
