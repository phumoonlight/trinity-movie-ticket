import React from 'react'
// import Card from '../components/cardIndex/Card'
import Header from '../components/header/Header'
import IndexContainer from '../components/IndexContainer'
import 'antd/dist/antd.css'

function Index() {
  return (
    <div>
      <Header />
      <IndexContainer />
    </div>
  )
}

// Index.getInitialProps = async ({ req }) => {
//  return { }
// }

export default Index
