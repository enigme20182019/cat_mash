import React, {Component} from 'react'
import {connect} from 'react-redux'

class LoadingComponent extends Component {
  render() {
    return (
      <div>
      {
        this.props.loading &&
        <div className="loading">
          <div className="loading_cat"/>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = ({loading}) => {
  return {loading}
}

export default connect(mapStateToProps)(LoadingComponent)
