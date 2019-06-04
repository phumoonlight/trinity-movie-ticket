import React, { Component } from 'react'

import { Layout } from 'antd';
import ButtonSortDate from './ButtonSortDate'
import ButtonSortPrice from './ButtonSortPrice'
import SearchBar from './SearchBar'
import Icon from './Icon'
import Text from './Text'


import './Header.css'

const { Header } = Layout;

class Headers extends Component {
  render() {
    return (
      <Header style={{ zIndex: 1, width: '100%' }}>
        <Icon />
        <Text />
        <div className="header">
          <SearchBar />
          <ButtonSortDate />
          <ButtonSortPrice />
        </div>
      </Header>

    );
  }
}
export default Headers;
