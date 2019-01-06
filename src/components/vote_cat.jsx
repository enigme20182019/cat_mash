import React, {Component} from 'react'

export default class VoteCat extends Component {


  render() {
    return (<div className="vote_cat">
      {this.props.cat &&
      <div onClick={() => this.props.vote()}>
        <div className="vote_cat__img__container">
          <div className="vote_cat__img" style={{backgroundImage : `url(${this.props.cat.url})`}}/>
          <div className="vote_cat__hover">Vote for {this.props.cat.id}</div>
        </div>
        </div>}
      </div>
    )
  }
}

