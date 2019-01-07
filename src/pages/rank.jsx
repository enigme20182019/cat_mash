import React, {Component} from 'react'
import {DISPLAY_VOTE} from "../reducers/app_reducer";
import rankMiddleware from '../middlewares/rank'
import {connect} from "react-redux";
import RankCat from "../components/rank_cat.jsx"

class Rank extends Component {

  async componentDidMount() {
    await rankMiddleware(this.props.dispatch)
  }

  render() {
    return (
      <div>
        <button className="toggle_page" onClick={() => this.props.dispatch({type : DISPLAY_VOTE})}>Go to vote</button>
        <div className="rank__top">
          {
            this.props.rank && this.props.rank.length > 2 && this.props.rank.slice(0, 3).map((cat, index) => {
              return <RankCat isTop={true} cat={cat} rank={index + 1} key={index}/>
            })
          }
        </div>
        <div className="rank__bottom__container">
          <div className="rank__bottom" style={{width: `${200 * (this.props.rank.length - 3)}px`}}>
            {
              this.props.rank && this.props.rank.length > 3 && this.props.rank.slice(3).map((cat, index) => {
                return <RankCat cat={cat} rank={index + 4} key={index}/>
              })
            }
          </div>
        </div>

    </div>)
  }
}

const mapStateToProps = ({display, rank}) => {
  return {display, rank}
}

export default connect(mapStateToProps)(Rank)