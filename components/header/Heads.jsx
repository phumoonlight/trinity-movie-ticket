import React, { Component } from 'react'
import Head from 'next/head'

import Menu from './Menu'

export default class Heads extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css" />
        </Head>
        <div className="header" />
        {' '}
        <Menu />
      </div>
    )
  }
}
