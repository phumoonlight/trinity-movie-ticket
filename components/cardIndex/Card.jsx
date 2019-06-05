import React, { Component } from 'react'
import {
  Card,
  Col,
  Row,
} from 'antd'
import moviesApi from '../../api/movies'
import Image from './Image'
import Name from './Name'
import Price from './Price'
import Date from './Date'

export default class Cards extends Component {
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

  mapping2 = () => {
    const { sortType } = this.props
    const { movies } = this.state
    let sortedMovies = []

    if (sortType === 'sortdate') {
      sortedMovies = movies.sort((a, b) => (
        new Date(b.date) - new Date(a.date)
      ))
    } else if (sortType === 'sortprice') {
      sortedMovies = movies.sort((a, b) => (
        (a.price) - (b.price)
      ))
    } else if (sortType === 'now') {
      sortedMovies = movies
    }


    console.log(sortType, sortedMovies)

    // mapping = () => {
    //   const { movies } = this.state
    //   const { sortType } = this.props

    //   if (sortType === 'sortdate') {
    //     this.setState(() => {
    //       movies.sort((a, b) => (
    //         new Date(b.date) - new Date(a.date)
    //       ))
    //     })
    //     console.log(sortType)
    //   } else if (sortType === 'sortprice') {
    //     this.setState(() => {
    //       movies.sort((a, b) => (
    //         (a.price) - (b.price)
    //       ))
    //     })
    //     console.log(sortType)
    //   } else {
    //     this.getMovies()
    //   }

    return movies.map(movie => (
      <Col span={6}>
        <Card>
          <Image image={movie.image} />
          <Name name={movie.name} />
          <Price price={movie.price} />
          <Date date={movie.date} />
        </Card>
      </Col>
    ))
  }

  render() {
    return (
      <Row gutter={16}>{this.mapping2()}</Row>
    )
  }
}
