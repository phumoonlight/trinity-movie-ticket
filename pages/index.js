import React from 'react'
import Header from '../src/components/layout/Header'
import MoviesContainer from '../src/components/layout/MoviesContainer'
import 'antd/dist/antd.css'

function Index() {
  return (
    <div>
      <Header />
      <MoviesContainer />
    </div>
  )
}

export default Index
