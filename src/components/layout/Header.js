import React from 'react'
import { Layout } from 'antd';
import SearchBar from '../common/SearchBar'
import HeaderIcon from '../app/HeaderIcon'

const { Header } = Layout;
const HeaderComponent = () => (
  <Header>
    <HeaderIcon />
    <SearchBar />
  </Header>
)

export default HeaderComponent;
