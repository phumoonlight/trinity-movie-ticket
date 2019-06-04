import React, { Component } from 'react'
import {
  Layout,
  Card,
  Col,
  Row,
} from 'antd'
import Menu from '../header/Menu'
import moviesApi from '../../api/movies'

const { Content } = Layout
const style = { padding: '1em', marginTop: '5em' }
const imgStyle = {
  width: '100%',
  height: '23rem',
}

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
    this.getMovies()
  }

  getMovies = async () => {
    const data = await moviesApi.getMovies()
    await this.setState({ movies: data })
  }

  mapping = () => {
    let { movies } = this.state
    movies = movies.sort((a, b) => (
      new Date(b.date) - new Date(a.date)
    ))
    return movies.map(movie => (
      <Col span={6}>
        <Card>
          <div className="custom-image">
            <img src={movie.image} alt="movie" style={imgStyle} />
          </div>
          <div className="custom-card">
            <h3>{movie.name}</h3>
          </div>
        </Card>
      </Col>
    ))
  }

  render() {
    return (
      <Content style={style}>
        <Menu />
        <Row gutter={16}>{this.mapping()}</Row>
      </Content>
    )
  }
}
export default Container
