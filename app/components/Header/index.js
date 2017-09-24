import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import FacebookLogin from 'react-facebook-login';

import User from './User';
import styles from './styles.css';


class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      isAnimate: false,
      isLoggedIn: false,
      profile: null,
    };

    this.responseFacebook = this.responseFacebook.bind(this);
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

  responseFacebook(res) {
    this.setState({ busy: true });

    fetch(`/auth/facebook/token?access_token=${res.accessToken}`, {
      method: 'GET',
    })
    .then(response => { return response.json(); })
    .then(body => {
      this.setState({
        busy: false,
        isLoggedIn: true,
        profile: body,
      });
    })
    .catch(err => {
      this.setState({
        err,
        busy: false,
      });
    });
  }

  render() {
    return (
      <header className={styles.main}>
        <div className="container">
          <div className={styles.left}>
            {this.state.isLoggedIn ? (
              <User model={this.state.profile} />
            ) : (
              <FacebookLogin 
                cssClass="button button-primary facebook"
                appId="1391679424181926" 
                fields="name,email,picture"
                autoLoad={true} 
                scope="public_profile"
                callback={this.responseFacebook} />
            )}
          </div>
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
