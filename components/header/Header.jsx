import React from 'react'

import { Layout } from 'antd';
import SearchBar from './SearchBar'
import HeaderIcon from '../HeaderIcon'

import './Header.css'

const { Header } = Layout;

const Headers = () => (
  <Header style={{ zIndex: 1, width: '100%' }}>
    <HeaderIcon />
    <div className="header">
      <SearchBar />
    </div>
  </Header>
)

export default Headers;
