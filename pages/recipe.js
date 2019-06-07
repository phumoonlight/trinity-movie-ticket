import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {
  Layout, Card, Button, PageHeader,
} from 'antd'
import Header from '../src/components/layout/Header'
import moviesApi from '../src/services/movies'
import '../src/styles/MovieCard.css'


const { Content } = Layout

const style = {
  padding: '1.5em',
  paddingTop: '1.5',
  width: '75%',
  margin: 'auto',
}


const imgStyle = {
  margin: 'auto',
  width: '30%',
  float: 'left',
  padding: '10px',
}

const card = {
  backgroundColor: '#E5E5E5',
}

export default class recipe extends Component {
  state = {
    movie: '',
  }

  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }

  componentDidMount = async () => {
    const { postId } = this.props
    const movie = await moviesApi.getMoviesById(postId)
    this.setState({ movie })
  }

  render() {
    const { movie, totalPrice } = this.state

    return (
      <div>
        <Header />
        <Content style={style}>
          <PageHeader onBack={() => Router.push(`/ticket/${movie._id}`)} title="Recipe" subTitle="My Recipe" />
          <Card style={card}>
            <div>
              <img src={movie.image} alt="movie" style={imgStyle} />
            </div>

            <div className="custom-card">
              <h1>{movie.name}</h1>
              <h2>Recipe</h2>
              <div>
                ID :
                {' '}
                {movie._id}
              </div>
              <div>
                Date :
                {' '}
                {movie.date}
              </div>
              <div>
                TotalPrice :
                {' '}
                {totalPrice}
              </div>
              <Link href="/index/">
                <Button type="submit">Home</Button>
              </Link>
            </div>
          </Card>
        </Content>
      </div>
    )
  }
}


recipe.propTypes = {
  postId: PropTypes.string.isRequired,
}
