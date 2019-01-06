import React, {Component} from 'react'

export default class RankCat extends Component {
  render() {
    let cat = this.props.cat
    let style = {}

    if(!this.props.isTop) {
      style = {
        float : "left",
        width : "100px"
      }
    }

    return (
      <div style={style} >
        <h2>#{this.props.rank}</h2>
        <span>{cat.upvote}</span>
        <div className="rank_cat__image" style={{backgroundImage: `url(${cat.url})`}}/>
        {
          this.props.isTop && (
            <div className="rank_cat__podium" style={{height : `${200 - 50 * this.props.rank}px`, marginTop : `${50 * this.props.rank + 10}px`}}/>
          )
        }
      </div>
    )
  }
}
