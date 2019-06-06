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
  width: '30%',
  float: 'left',
  padding: '10px',
}

const card = {
  backgroundColor: '#E5E5E5',
}

export default class ticket extends Component {
  state = {
    movie: '',
    amount: 0,
    totalPrice: 0,
  }

  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }


  componentDidMount = async () => {
    const { postId } = this.props
    const movie = await moviesApi.getMoviesById(postId)
    this.setState({ movie })
  }

  doPlus = async () => {
    const { amount } = this.state;
    await this.setState({
      amount: amount + (+1),
    });
    this.setTotalPrice()
  }

  doMinus = async () => {
    let { amount } = this.state;
    if (amount === 0) {
      amount += 1
    }
    await this.setState({
      amount: amount - (+1),
    });
    this.setTotalPrice()
  }

  setTotalPrice = () => {
    const { movie, amount } = this.state;
    this.setState({
      totalPrice: amount * movie.price,
    })
  }

  render() {
    const { movie, amount, totalPrice } = this.state
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

              <div>
                <h2>Seat</h2>
                <input type="number" value={amount} min="0" />
                <Button onClick={this.doMinus}> - </Button>
                <Button onClick={this.doPlus}> + </Button>
              </div>
              <div>
                <h2>Price</h2>
                <div>{totalPrice}</div>
              </div>

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


ticket.propTypes = {
  postId: PropTypes.string.isRequired,
}
