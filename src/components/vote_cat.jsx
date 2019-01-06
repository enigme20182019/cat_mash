import React, {Component} from 'react'

export default class VoteCat extends Component {

  vote() {
  }

  render() {
    console.log(this.props.cat)
    return (<div>
        vote cat
      {this.props.cat &&
      <div onClick={() => this.vote(this.props.cat)}>
        vote img
        <img src={this.props.cat.url}/>
      </div>}
      </div>
    )
  }
}

