import React, { Component } from 'react'
import { Layout } from 'antd'
import Menu from './Menu'
import Card from './Card'

const { Content } = Layout
const style = { padding: '1em', marginTop: '5em' }

class Container extends Component {
  state = {
    sortType: 'now',
  }

  getSortType = (sortType) => {
    this.setState({ sortType })
  }

  render() {
    return (
      <div>
        <Content style={style}>
          <Menu func={this.getSortType} />
          <Card sortType={this.state.sortType} />
        </Content>
      </div>
    )
  }
}
export default Container
