import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import Link from 'next/link'
import '../../styles/MovieCard.css'

const MovieCard = (props) => {
  const {
    id,
    image,
    name,
    price,
    date,
  } = props
  return (
    <Link href={`/detail/${id}`}>
      <Card style={{ cursor: 'pointer' }}>
        <div className="movie-image">
          <img src={image} alt={name} />
        </div>
        <div className="movie-context">
          <h3>{name}</h3>
          <div>{`${price} บาท`}</div>
          <div>{date}</div>
        </div>
      </Card>
    </Link>
  )
}

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default MovieCard
