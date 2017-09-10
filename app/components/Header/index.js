import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.scss';


class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnimate: false,
    };
  }

  componentDidMount() {
    this.setState({
      isAnimate: true
    })
  }
  
  getAnimatedClass(name) {
    if (this.state.isAnimate) {
      return 'animated ' + name;
    } else {
      return '';
    }
  }

  render() {
    return (
      <header className={styles.main}>
        <div className="container">
          <div className={styles.left}>Left</div>
          <div className={styles.right}>Right</div>
          <div className={styles.center}>
            <div className={this.getAnimatedClass('tada')}>GOING SUNNY</div>
          </div>
        </div>
      </header>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Intro)
