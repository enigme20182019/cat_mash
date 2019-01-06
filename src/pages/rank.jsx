import React, {Component} from 'react'
import {DISPLAY_VOTE} from "../reducers/app_reducer";
import rankMiddleware from '../midlewares/rank'
import {connect} from "react-redux";
import RankCat from "../components/rank_cat.jsx"

class Rank extends Component {

  async componentDidMount() {
    await rankMiddleware(this.props.dispatch)
  }

  render() {
    return (
      <div>
        <h1>Rank</h1>
        <button onClick={() => this.props.dispatch({type : DISPLAY_VOTE})}>Go to vote</button>
        {
          this.props.rank && this.props.rank.length > 2 && this.props.rank.slice(0, 3).map((cat, index) => {
            return <RankCat cat={cat} rank={index + 1}/>
          })
        }
        {
          this.props.rank && this.props.rank.length > 3 && this.props.rank.slice(3).map((cat, index) => {
            return <RankCat cat={cat} rank={index + 1}/>
          })
        }


    </div>)
  }
}

const mapStateToProps = ({display, rank}) => {
  return {display, rank}
}

export default connect(mapStateToProps)(Rank)