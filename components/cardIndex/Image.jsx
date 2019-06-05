import React, { Component } from 'react'
import PropTypes from 'prop-types'

const imgStyle = {
  width: '100%',
  height: '23rem',
}

class Image extends Component {
  render() {
    const { image } = this.props
    return (
      <div className="custom-image">
        <img src={image} alt="movie" style={imgStyle} />
      </div>
    )
  }
}
Image.propTypes = {
  image: PropTypes.string.isRequired,
};
export default Image
