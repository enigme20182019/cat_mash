import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {END_LOAD, START_LOAD} from "../reducers/app_reducer";
class VoteCat extends Component {

  constructor() {
    super()
    this.state = {voted : false, froozen : false}
  }

  selectCat() {
    if(this.state.froozen) {
      return
    }
    this.setState({voted : true, froozen : true})
    setTimeout(() => {
      this.setState({voted : false})
      this.props.dispatch({type : START_LOAD})
    }, 300)
    setTimeout(() => {
      this.props.vote()
      this.setState({...this.state, froozen : false})
    }, 1000)
    setTimeout(() => {
      this.props.dispatch({type : END_LOAD})
    }, 1300)
  }

  render() {
    let powerClass = classNames({'vote_cat__thx' : true, 'vote_cat__thx--active' : this.state.voted})
    return (<div className="vote_cat">
      {this.props.cat &&
      <div onClick={() => this.selectCat()}>
        <div className={powerClass}>

          I can feel the power !

        </div>

        <div className="vote_cat__img__container">
          <div className="vote_cat__img" style={{backgroundImage : `url(${this.props.cat.url})`}}/>
          <div className="vote_cat__hover">Vote for {this.props.cat.id}</div>
        </div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = ({}) => {
  return {}
}

export default connect(mapStateToProps)(VoteCat)