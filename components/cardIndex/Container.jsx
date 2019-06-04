import React, { Component } from 'react'
import { Layout } from 'antd';
import Card from './Card'

const { Content } = Layout;
class Container extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 10 }} />
        <Card />
      </Content>
    )
  }
}
export default Container
