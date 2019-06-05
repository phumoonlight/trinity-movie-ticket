import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Name extends Component {
  render() {
    const { name } = this.props
    return (
      <div className="custom-card">
        <h3>{name}</h3>
      </div>
    )
  }
}
Name.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Name
