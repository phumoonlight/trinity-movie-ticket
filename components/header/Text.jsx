import React from 'react'
import PropTypes from 'prop-types';


const Text = (props) => {
  const { style, context } = props
  return <span style={style}>{context}</span>
}

Text.propTypes = {
  style: PropTypes.shape,
  context: PropTypes.string.isRequired,
}

Text.defaultProps = {
  style: {},
}

export default Text
