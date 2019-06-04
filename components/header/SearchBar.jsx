import React, { Component } from 'react'
import './SearchBar.css'
import { Input } from 'antd';


class SearchBar extends Component {
  render() {
    const { Search } = Input;
    return (
      <div>
        <Search
          size="small"
          placeholder="Search..."
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
    )
  }
}
export default SearchBar
