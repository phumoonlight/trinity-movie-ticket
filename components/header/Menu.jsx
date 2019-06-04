import React, { Component } from 'react'
import { Menu } from 'antd';
import Text from './Text'
import './Header.css'

class Menus extends Component {
  state = {
    current: 'now',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state
    return (
      <div align="center">
        <Text />
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="now">
          Now Showing
          </Menu.Item>
          <Menu.Item key="sortdate">
          Sort-Date
          </Menu.Item>
          <Menu.Item key="sortprice">
          Sort-Price
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Menus
