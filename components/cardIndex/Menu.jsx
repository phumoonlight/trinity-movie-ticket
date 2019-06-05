import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd';
import Text from '../header/Text'
import './Card.css'


class Menus extends Component {
  state = {
    current: 'now',
  };


  handleClick = async (e) => {
    const { func } = this.props
    await this.setState({
      current: e.key,
    });
    const { current } = this.state
    func(current)
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

Menus.propTypes = {
  func: PropTypes.func.isRequired,
}
