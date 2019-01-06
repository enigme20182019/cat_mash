import React, {Component} from 'react'

export default class VoteCat extends Component {


  render() {
    return (<div>
        vote cat
      {this.props.cat &&
      <div onClick={() => this.props.vote()}>
        vote img
        <img src={this.props.cat.url}/>
      </div>}
      </div>
    )
  }
}

