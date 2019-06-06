import React, { Component } from 'react'
import Axios from 'axios'
import {
  Layout, Card, Col, Row,
} from 'antd'
import Menu from './cardIndex/Menu'
import Text from './Text'


const { Content } = Layout
const style = { padding: '1em', marginTop: '5em' }
const imgStyle = {
  width: '100%',
  height: '23rem',
}

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
    this.getMovies()
  }

  getMovies = async () => {
    const result = await Axios.get('http://localhost:8080/movies')
    await this.setState({ movies: result.data })
  }

  getSortType = async (type) => {
    const { movies } = this.state
    switch (type) {
      case 'sort-date':
        movies.sort((a, b) => new Date(a.date) - new Date(b.date))
        break;
      case 'sort-price':
        movies.sort((a, b) => a.price - b.price)
        break;
      default:
    }
    this.setState({ movies })
  }

  mapMoviesCard = () => {
    const { movies } = this.state
    return movies.map(movie => (
      <Col span={6}>
        <Card>
          <div className="custom-image">
            <img src={movie.image} alt="movie" style={imgStyle} />
          </div>
          <div className="custom-card">
            <h3>{movie.name}</h3>
            <Text style={{ display: 'block' }} context={`${movie.price} บาท`} />
            <Text style={{ display: 'block' }} context={movie.date} />
          </div>
        </Card>
      </Col>
    ))
  }

  render() {
    return (
      <Content style={style}>
        <Menu get={this.getSortType} />
        <Row gutter={16}>{this.mapMoviesCard()}</Row>
      </Content>
    )
  }
}
export default IndexContainer
