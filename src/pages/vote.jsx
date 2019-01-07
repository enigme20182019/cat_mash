import React, {Component} from 'react'
import {DISPLAY_RANK, LOAD_CATS} from "../reducers/app_reducer";
import {connect} from "react-redux";
import voteMiddleware from '../midlewares/vote'

import VoteCatComponent from '../components/vote_cat.jsx'

class Vote extends Component {

  constructor() {
    super()
    this.votes = []
  }

  async componentDidMount() {
    // only cold load
    let rawCatsResponse = await fetch(`http://localhost:8001/pick_cat/?except=${this.votes.join(',')}`)
    let catsResponse = await rawCatsResponse.json()
    this.props.dispatch({type : LOAD_CATS, payload : catsResponse})
  }

  voteLeft() {
    let winner = this.props.leftCat
    this.votes.push(winner)
    let loser = this.props.rightCat
    voteMiddleware(this.props.dispatch, winner, loser, this.votes)
  }

  voteRight() {
    let winner = this.props.rightCat
    this.votes.push(winner)
    let loser = this.props.leftCat
    voteMiddleware(this.props.dispatch, winner, loser, this.votes)
  }

  render() {
    return (<div className="vote_page">
      <p className="vote_page__text">

        Welcome to the <span className="imp">cat factory</span><br/>
        We need you to find the <span className="imp">cutest</span> cat of the web
        <br/><br/>

        Choose which one <span className="imp">you prefer</span><br/>
        the war rages on the <span className="imp">cat universe</span>

      </p>
      <div className="vote_cat__container">
        <VoteCatComponent vote={() => {this.voteLeft()}} cat={this.props.leftCat}/>
        <VoteCatComponent vote={() => {this.voteRight()}} cat={this.props.rightCat}/>
        <button className="toggle_page" onClick={() => this.props.dispatch({type : DISPLAY_RANK})}>Go to rank</button>
      </div>
    </div>)
  }
}

const mapStateToProps = ({display, leftCat, rightCat}) => {
  return {display: display, leftCat: leftCat, rightCat: rightCat}
}

export default connect(mapStateToProps)(Vote)

