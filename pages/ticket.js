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

export default class ticket extends Component {
  state = {
    movie: '',
    amount: 0,
    inputCash: 0,
    totalPrice: 0,
    cashChange: 0,
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

  setTotalPrice = async () => {
    const { movie, amount } = this.state;
    await this.setState({
      totalPrice: amount * movie.price,
    })
  }

  onInputCash = (e) => {
    const { value } = e.target;
    this.setState({
      inputCash: value,
    });
  }

  onCashChange = async () => {
    const { inputCash, totalPrice } = this.state
    await this.setState({
      cashChange: inputCash - totalPrice,
    });
  }

  render() {
    const {
      movie, amount, totalPrice, cashChange,
    } = this.state
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
                {' '}
                Perseat
              </h3>

              <div>
                <h1>Movie Ticket</h1>
                <div>
                  <h3>
                    Total Price :
                    {' '}
                    {totalPrice}
                  </h3>
                </div>
                <input type="number" value={amount} min="0" />
                <Button onClick={this.doMinus}> - </Button>
                <Button onClick={this.doPlus}> + </Button>
              </div>

              <div>
                <h2>Input Money</h2>
                <input type="number" onBlur={this.onInputCash} />
                <Button onClick={this.onCashChange}> Pay </Button>
              </div>
              <div>
                <h3>
                  CashChange :
                  {' '}
                  {cashChange}
                </h3>

              </div>

              <Link href={`/recipe/${movie._id}`}>
                <Button onClick={totalPrice} type="submit">ชำระเงิน</Button>
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
