import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {
  Layout,
  Card,
  Col,
  Row,
} from 'antd'
import moviesApi from '../src/controllers/movies'

const { Content } = Layout
const style = { padding: '1em', marginTop: '5em' }
const imgStyle = {
  margin: 'auto',
  width: '20%',
  float: 'left',
  // border: '3px solid green',
  padding: '10px',
}

const cardStyle = {
  margin: 'auto',
  width: '80%',
  right: '100px',
  // border: '3px solid red',
  padding: '5em',
}
const buttonDe = {

}
export default class detail extends Component {
state = {
  movie: '',
}

static getInitialProps({ query: { id } }) {
  console.log('ssss')
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
    <Content style={style}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <div style={cardStyle}>

              <h3>{movie.name}</h3>
              <div className="jsx-2 topic-content">
                <img src={movie.image} alt="movie" style={imgStyle} />
              </div>
              <br />
              <div className="custom-card">
                <h3>{movie.name}</h3>
              </div>
              {movie.name}
              <br />
              {movie.detail}
              <br />
              <br />
              <h3>
ราคา :
                {movie.price}
              </h3>
              <div className="buttonDetail">
                <Link href={`/ticket/${movie._id}`}>
                  <button type="submit" style={buttonDe}>ชำระเงิน</button>
                </Link>

              </div>


            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  )
}
}


detail.propTypes = {
  postId: PropTypes.string.isRequired,
}
