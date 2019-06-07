import React from 'react'
import PropTypes from 'prop-types'
import Header from '../src/components/layout/Header'
import MoviesContainer from '../src/components/layout/MoviesContainer'
import SearchBar from '../src/components/common/SearchBar'
import Footer from '../src/components/layout/Footer'
import 'antd/dist/antd.css'

function Index(props) {
  const { searchkey } = props
  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <MoviesContainer searchKey={searchkey} />
      <Footer />
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
