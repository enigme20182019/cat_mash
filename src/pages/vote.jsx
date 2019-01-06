import React, {Component} from 'react'
import {DISPLAY_RANK} from "../reducers/app_reducer";
import {connect} from "react-redux";

class Vote extends Component {

  render() {
    return (<div>
      <h1>Vote</h1>
      <button onClick={() => this.props.dispatch({type : DISPLAY_RANK})}>Go to rank</button>
    </div>)
  }
}

const mapStateToProps = ({display}) => {
  return {display : display}
}

export default connect(mapStateToProps)(Vote)
