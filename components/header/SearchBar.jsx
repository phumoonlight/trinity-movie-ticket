import React, { Component } from 'react'
import '../header/SearchBar.css'


class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">Search</button>
      </div>
    )
  }
}
export default SearchBar