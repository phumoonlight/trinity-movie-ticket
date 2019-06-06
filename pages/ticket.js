import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {
  Layout, Card, Button, PageHeader,
} from 'antd'
import Header from '../src/components/layout/Header'
import moviesApi from '../src/controllers/movies'
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
  width: '20%',
  float: 'left',
  padding: '10px',
}

const card = {
  backgroundColor: '#E5E5E5',
}

export default class ticket extends Component {
  state = {
    movie: '',
    summary: 0,

  }

  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }


  componentDidMount = async () => {
    const { postId } = this.props
    const data = await moviesApi.getMoviesById(postId)
    this.setState({ movie: data })
  }

  doPlus = () => {
    const { summary } = this.state;
    this.setState({
      summary: summary + (+1),
    });
  }

  doMinus = () => {
    const { summary } = this.state;
    this.setState({
      summary: summary - (+1),
    });
  }


  render() {
    const { movie } = this.state
    const { summary } = this.state;
    return (
      <div>
        <Header />
        <Content style={style}>
          <PageHeader onBack={() => Router.push(`/detail/${movie._id}`)} title="Ticket" subTitle="Buy Ticket" />
          <Card style={card}>
            <div>
              <img src={movie.image} alt="movie" style={imgStyle} />
            </div>

            <div className="custom-card">
              <h1>{movie.name}</h1>
              <h3>
                Price :
                {' '}
                {movie.price}
              </h3>
            </div>
            <div>

              <input type="number" value={summary} />
              <Button onClick={this.doMinus}> - </Button>
              <Button onClick={this.doPlus}> + </Button>
            </div>

            <Link href={`/ticket/${movie._id}`}>
              <Button type="submit">ชำระเงิน</Button>
            </Link>

          </Card>
        </Content>
      </div>
    )
  }
}


ticket.propTypes = {
  postId: PropTypes.string.isRequired,
}
