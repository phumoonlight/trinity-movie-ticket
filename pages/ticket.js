import React, { Component } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {
  Layout, PageHeader,
} from 'antd'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'
import moviesApi from '../src/services/movies'
import '../src/styles/MovieCard.css'
import TicketCard from '../src/components/common/TicketCard'
import 'antd/dist/antd.css'


const { Content } = Layout

const style = {
  padding: '1.5em',
  paddingTop: '1.5',
  width: '75%',
  margin: 'auto',
}

export default class ticket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
    }
  }

  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }

  componentDidMount = async () => {
    const { postId } = this.props
    const movie = await moviesApi.getMoviesById(postId)
    this.setState({ movie })
  }

  goToDetail = () => {
    const { movie } = this.state
    Router.push(`/detail/${movie._id}`)
  }

  render() {
    const { movie } = this.state
    return (
      <div>
        <Header />
        <Content style={style}>
          <PageHeader onBack={this.goToDetail} title="Ticket" subTitle={movie.name} />
          <TicketCard
            id={movie._id}
            image={movie.image}
            name={movie.name}
            price={movie.price}
          />
        </Content>
        <Footer />
      </div>
    )
  }
}


ticket.propTypes = {
  postId: PropTypes.string.isRequired,
}
