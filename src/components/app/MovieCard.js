import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const MovieCard = (props) => {
  const {
    image, name, price, date,
  } = props
  return (
    <Card>
      <div className="movie-image">
        <img src={image} alt={name} />
      </div>
      <div className="movie-context">
        <h3>{name}</h3>
        <div>{`${price} บาท`}</div>
        <div>{date}</div>
      </div>
    </Card>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default MovieCard
