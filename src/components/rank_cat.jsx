import React, {Component} from 'react'

export default class RankCat extends Component {
  render() {
    let cat = this.props.cat

    return (
      <div>
        <h2>#{this.props.rank}</h2>
        <span>{cat.upvote}</span>
        <span>{cat.downvote}</span>
        <img src={cat.url}/>
      </div>
    )
  }
}
