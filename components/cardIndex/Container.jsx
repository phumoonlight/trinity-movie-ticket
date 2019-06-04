import React, { Component } from 'react'
import {
  Layout,
  Card,
  Col,
  Row,
  Button,
} from 'antd'
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
      sortType: '',
    }
    this.getMovies()
  }

  getMovies = async () => {
    const data = await moviesApi.getMovies()
    await this.setState({ movies: data })
  }

  sort = (type) => {
    this.setState({
      sortType: type,
    })
  }


  mapping = () => {
    let { movies } = this.state
    const { sortType } = this.state

    if (sortType === 'Date') {
      movies = movies.sort((a, b) => (
        new Date(b.date) - new Date(a.date)// เรียงตามวัน
      ))
      console.log('Date')
    } else if (sortType === 'Price') {
      console.log('Price')
      movies = movies.sort((a, b) => (
        (a.price) - (b.price)// เรียงตามราคา

      ))
    }
    // (a.price) + (b.price)//เรียงตามราคา

    return movies.map(movie => (

      <Col span={6}>
        <Card>
          <div className="custom-image">
            <img src={movie.image} alt="movie" style={imgStyle} />
          </div>
          <div className="custom-card">
            <h3>{movie.name}</h3>
            {movie.price}
            {' บาท'}
            <br />
            {movie.date}
          </div>
        </Card>
      </Col>
    ))
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.sort('Date')} type="Date">Date</Button>
        <Button onClick={() => this.sort('Price')} type="Price">Price</Button>
        <Content style={style}>
          <Row gutter={16}>{this.mapping()}</Row>
        </Content>
      </div>
    )
  }
}
export default Container
