import React, { Component } from 'react'
import Axios from 'axios'
import { Layout, Col, Row } from 'antd'
import Menu from './MoviesMenu'
import MovieCard from '../app/MovieCard'

const { Content } = Layout
const style = { padding: '1em', marginTop: '5em' }

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
    this.getMovies()
  }

  getMovies = async () => {
    try {
      const result = await Axios.get('http://localhost:8080/movies')
      await this.setState({ movies: result.data })
    } catch (error) {
      console.log(error)
    }
  }

  getSortType = async (type) => {
    const { movies } = this.state
    switch (type) {
      case 'sort-date':
        movies.sort((a, b) => new Date(a.date) - new Date(b.date))
        break
      case 'sort-price':
        movies.sort((a, b) => a.price - b.price)
        break
      default:
        movies.sort((a, b) => {
          if (a.name < b.name) { return -1 }
          if (a.name > b.name) { return 1 }
          return 0
        })
    }
    this.setState({ movies })
  }

  mapMoviesCard = () => {
    const { movies } = this.state
    return movies.map(movie => (
      <Col span={5} style={{ marginBottom: '1rem' }}>
        <MovieCard
          id={movie._id}
          image={movie.image}
          name={movie.name}
          price={movie.price}
          date={movie.date}
        />
      </Col>
    ))
  }

  render() {
    return (
      <Content style={style}>
        <Menu get={this.getSortType} />
        <Row
          style={{ marginTop: '2rem' }}
          type="flex"
          justify="center"
          gutter={16}
        >
          {this.mapMoviesCard()}
        </Row>
      </Content>
    )
  }
}
export default MoviesContainer
