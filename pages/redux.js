import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAction } from '../store'

class redux extends Component {
  onButtonClick = () => {
    this.props.addAction()
    console.log('test button')
  }

  render() {
    return (
      <div>
        {this.props.number}
        <button onClick={this.onButtonClick} type="button">บวกค่า</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { number } = state
  return { number }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addAction }, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(redux)
