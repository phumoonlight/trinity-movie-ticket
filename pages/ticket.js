import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import {
  Layout, Card, Button, PageHeader,
} from 'antd'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'
import moviesApi from '../src/services/movies'
import '../src/styles/MovieCard.css'
<<<<<<< HEAD
import { summaryAction } from '../store'
=======
import TicketCard from '../src/components/common/TicketCard'
import 'antd/dist/antd.css'
>>>>>>> af24f215fed5364aac46df71b582c21807145652


const { Content } = Layout

const style = {
  padding: '1.5em',
  paddingTop: '1.5',
  width: '75%',
  margin: 'auto',
}

<<<<<<< HEAD

const imgStyle = {
  margin: 'auto',
  width: '30%',
  float: 'left',
  padding: '10px',
}

const card = {
  backgroundColor: '#E5E5E5',
}

class ticket extends Component {
  state = {
    movie: '',
    amount: 0,
    inputCash: 0,
    totalPrice: 0,
    cashChange: 0,
=======
export default class ticket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
    }
>>>>>>> af24f215fed5364aac46df71b582c21807145652
  }

  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }

  componentDidMount = async () => {
    const { postId } = this.props
    const movie = await moviesApi.getMoviesById(postId)
    this.setState({ movie })
  }

<<<<<<< HEAD
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
    // this.props.summaryAction(inputCash - totalPrice)
    await this.setState({
      cashChange: inputCash - totalPrice,

    });
=======
  goToDetail = () => {
    const { movie } = this.state
    Router.push(`/detail/${movie._id}`)
>>>>>>> af24f215fed5364aac46df71b582c21807145652
  }

  render() {
    const { movie } = this.state
    return (
      <div>
        <Header />
        <Content style={style}>
<<<<<<< HEAD
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
                  {this.props.number}
                  <br />
                  {cashChange}
                </h3>

              </div>

              <Link href={`/recipe/${movie._id}?total=${cashChange}`}>
                <Button onClick={totalPrice}>ชำระเงิน</Button>
              </Link>
            </div>
          </Card>
=======
          <PageHeader onBack={this.goToDetail} title="Ticket" subTitle={movie.name} />
          <TicketCard
            id={movie._id}
            image={movie.image}
            name={movie.name}
            price={movie.price}
          />
>>>>>>> af24f215fed5364aac46df71b582c21807145652
        </Content>
        <Footer />
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { number } = state
  return { number }
}

const mapDispatchToProps = dispatch => bindActionCreators({ summaryAction }, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ticket)


ticket.propTypes = {
  postId: PropTypes.string.isRequired,
}
