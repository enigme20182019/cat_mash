import React, {Component} from 'react'
import {DISPLAY_VOTE} from "../reducers/app_reducer";
import {connect} from "react-redux";

class Rank extends Component {
  render() {
    return (
      <div>
        <h1>Rank</h1>
        <button onClick={() => this.props.dispatch({type : DISPLAY_VOTE})}>Go to vote</button>
    </div>)
  }
}

const mapStateToProps = ({display}) => {
  return {display : display}
}

export default connect(mapStateToProps)(Rank)