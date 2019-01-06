import React, {Component} from 'react'
import {DISPLAY_RANK, LOAD_CATS} from "../reducers/app_reducer";
import {connect} from "react-redux";

import VoteCatComponent from '../components/vote_cat.jsx'

class Vote extends Component {

  async componentDidMount() {
    // only cold load
    let rawCatsResponse = await fetch('http://localhost:8001/cats/')
    let catsResponse = await rawCatsResponse.json()
    this.props.dispatch({type : LOAD_CATS, payload : catsResponse})
  }

  render() {
    return (<div>
      <h1>Vote</h1>
      <VoteCatComponent cat={this.props.leftCat}/>
      <VoteCatComponent cat={this.props.rightCat}/>
      <button onClick={() => this.props.dispatch({type : DISPLAY_RANK})}>Go to rank</button>
    </div>)
  }
}

const mapStateToProps = ({display, leftCat, rightCat}) => {
  return {display: display, leftCat: leftCat, rightCat: rightCat}
}

export default connect(mapStateToProps)(Vote)
