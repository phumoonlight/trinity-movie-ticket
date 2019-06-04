import React, { Component } from 'react'
import { Menu } from 'antd'

export default class Menus extends Component {
  render() {
    return (
      <div>

        <Menu
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="product">
            <h3>Product</h3>
          </Menu.Item>
          <Menu.Item key="About">
            <h3>About</h3>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
