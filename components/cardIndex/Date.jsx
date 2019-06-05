import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Date extends Component {
  render() {
    const { date } = this.props
    return (
      <div>
        {'วันที่เข้าฉาย'}
        {date}
      </div>
    )
  }
}
Date.propTypes = {
  date: PropTypes.string.isRequired,
};
export default Date
