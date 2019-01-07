import React, {Component} from 'react'

export default class RankCat extends Component {
  render() {
    let cat = this.props.cat
    let style = {}

    if(!this.props.isTop) {
      style = {
        float : "left",
        width : "200px"
      }
    }

    return (
      <div style={style} >

        <span className="rank_cat__elo">{cat.elo}</span>
        <div className="rank_cat__image" style={{backgroundImage: `url(${cat.url})`}}/>
        {
          this.props.isTop && (
            <div className="rank_cat__podium" style={{height : `${200 - 50 * this.props.rank}px`, marginTop : `${50 * this.props.rank + 10}px`}}>
              <h2 className="rank_cat__podium__position">{this.props.rank}</h2>
            </div>
          )
        }
      </div>
    )
  }
}
