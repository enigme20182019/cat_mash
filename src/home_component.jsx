import React, {Component} from 'react'
import {connect} from 'react-redux'
import {DISPLAY_RANK, DISPLAY_VOTE} from "./reducers/app_reducer";

import Rank from "./pages/rank.jsx";
import Vote from "./pages/vote.jsx";
import Footer from "./components/footer.jsx";
import LoadingComponent from './components/loading.jsx'

class HomeComponent extends Component {
  render() {
    return (<div>
      {this.props.display === DISPLAY_VOTE && <Vote/>}
      {this.props.display === DISPLAY_RANK && <Rank/>}
      <Footer/>
      <LoadingComponent/>
    </div>)
  }
}

const mapStateToProps = ({display}) => {
  return {display : display}
}

export default connect(mapStateToProps)(HomeComponent)
