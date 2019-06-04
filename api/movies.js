import Axios from 'axios';

const getMovies = async () => {
  const data = await Axios.get('http://localhost:8080/movies')
  return data
}

const getMoviesByID = async () => {
  const data = await Axios.get('http://localhost:8080/movies/:id')
  return data
}

export default {
  getMovies,
  getMoviesByID,
}
