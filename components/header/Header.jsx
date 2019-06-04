import React, { Component } from 'react'

import { Layout } from 'antd';
import SearchBar from './SearchBar'
import Icon from './Icon'

import './Header.css'

const { Header } = Layout;

class Headers extends Component {
  render() {
    return (
      <Header style={{ zIndex: 1, width: '100%' }}>
        <Icon />
        <div className="header">
          <SearchBar />
        </div>
      </Header>


    );
  }
}
export default Headers;
