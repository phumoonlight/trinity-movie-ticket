import React, { Component } from 'react'

import ButtonSortDate from './ButtonSortDate'
import ButtonSortPrice from './ButtonSortPrice'
import SearchBar from './SearchBar'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        Header.
        <SearchBar />
        <ButtonSortDate />
        <ButtonSortPrice />
      </div>
    );
  }
}
export default Header;
