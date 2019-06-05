import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import Text from '../header/Text'
import './Card.css'

const style = {
  container: { textAlign: 'center' },
  textHeader: {
    display: 'inline-block',
    fontSize: '2.5rem',
    paddingBottom: '2.5rem',
  },
}

class Menus extends Component {
  state = {
    type: 'now',
  }

  handleClick = async (e) => {
    const { get } = this.props
    await this.setState({
      type: e.key,
    })
    const { type } = this.state
    get(type)
  }

  render() {
    const { type } = this.state
    return (
      <div style={style.container}>
        <Text
          style={style.textHeader}
          context="Movies"
        />
        <Menu
          onClick={this.handleClick}
          selectedKeys={type}
          mode="horizontal"
        >
          <Menu.Item key="now">Now Showing</Menu.Item>
          <Menu.Item key="sortdate">Sort-Date</Menu.Item>
          <Menu.Item key="sortprice">Sort-Price</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Menus

Menus.propTypes = {
  get: PropTypes.func.isRequired,
}
