import React from 'react'
import Link from 'next/link'
import { Layout } from 'antd';
import SearchBar from '../common/SearchBar'
import '../../styles/Header.css'

const { Header } = Layout;
const HeaderComponent = () => (
  <Header>
    <Link href="/index">
      <a className="header-link">Homepage</a>
    </Link>
    <SearchBar />
  </Header>
)

export default HeaderComponent;
