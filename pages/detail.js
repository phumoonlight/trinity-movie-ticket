import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {
  Layout, Card, Button, PageHeader,
} from 'antd'
import Header from '../src/components/layout/Header'
// import Card from '../src/components/common/Card'
import moviesApi from '../src/controllers/movies'
import '../src/styles/Card.css'

const { Content } = Layout

const style = {
  padding: '1.5em',
  paddingTop: '1.5',
  width: '75%',
  margin: 'auto',
  marginTop: '0.5em',
}

const imgStyle = {
  padding: '1em',
  width: '24em',
  float: 'left',
}
const card = {
  backgroundColor: '#E5E5E5',
}


export default class detail extends Component {
state = {
  movie: '',
}

static getInitialProps({ query: { id } }) {
  return { postId: id }
}

componentDidMount = async () => {
  const { postId } = this.props
  const data = await moviesApi.getMoviesById(postId)
  this.setState({ movie: data })
}// try


render() {
  const { movie } = this.state
  return (
    <div>
      <Header />
      <Content style={style}>
        <PageHeader onBack={() => Router.push('/index')} title="Detail" subTitle="This is a subtitle" />
        <Card style={card}>
          <div>
            <img src={movie.image} alt="movie" style={imgStyle} />
          </div>

          <div className="custom-card">
            <h1>{movie.name}</h1>
            {movie.detail}
          </div>

          <div className="custom-card">
            <h3>
                Price :
              {' '}
              {movie.price}
            </h3>
            <Link href={`/ticket/${movie._id}`}>
              <Button type="submit">ชำระเงิน</Button>
            </Link>
          </div>
        </Card>
      </Content>
    </div>

  )
}
}


detail.propTypes = {
  postId: PropTypes.string.isRequired,
}
