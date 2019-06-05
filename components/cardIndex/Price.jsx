import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Price extends Component {
  render() {
    const { price } = this.props
    return (
      <div>
        {'ราคา '}
        {price}
        {' บาท'}
      </div>
    )
  }
}
Price.propTypes = {
  price: PropTypes.number.isRequired,
};
export default Price
