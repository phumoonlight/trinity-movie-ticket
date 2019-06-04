import React, { Component } from 'react'
import './SearchBar.css'
import { Input } from 'antd';

const { Search } = Input;
class SearchBar extends Component {
  render() {
    return (
      <Search
        size="small"
        placeholder="Search..."
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    )
  }
}
export default SearchBar
