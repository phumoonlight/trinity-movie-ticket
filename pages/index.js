import React from 'react'
import PropTypes from 'prop-types'
import Header from '../src/components/layout/Header'
import MoviesContainer from '../src/components/layout/MoviesContainer'
import 'antd/dist/antd.css'

function Index(props) {
  const { searchkey } = props
  return (
    <div>
      <Header />
      <MoviesContainer searchKey={searchkey} />
    </div>
  )
}

Index.getInitialProps = ({ query: { searchkey } }) => ({ searchkey })

Index.propTypes = {
  searchkey: PropTypes.string,
}

Index.defaultProps = {
  searchkey: '',
}

export default Index
