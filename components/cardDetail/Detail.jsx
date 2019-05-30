import React, { Component } from 'react'
import './Detail.css'

class Detail extends Component {
  
  render() {
    return (
      <div className="detail-box">
        <div>{this.props.name}</div>
        <div>{this.props.detail}</div>
        <div>{this.props.price}</div>
        <div>{this.props.date}</div>
      </div>
    )
  }
}

export default Detail
