import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withReduxStore from '../src/lib/with-redux-store'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    console.log(';;;;;;;;')
    console.log(reduxStore.getState())
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
