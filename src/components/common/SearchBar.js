import React from 'react'
import Router from 'next/router';
import { Input } from 'antd';

const search = (searchKey) => {
  Router.push(`/?searchkey=${searchKey}`)
}

const SearchBar = () => {
  const { Search } = Input
  return (
    <Search
      size="small"
      placeholder="Search..."
      onSearch={search}
      style={{ width: '20rem' }}
    />
  )
}

export default SearchBar
