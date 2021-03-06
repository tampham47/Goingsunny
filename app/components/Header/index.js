import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import mqtt from 'middleware/mqtt';
import moment from 'moment';

import Facebook from './Facebook';
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
    });
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
      this.props.updateUser(body);

      const payload = {
        user: body,
        session: moment().format('YYYYMMDD'),
      };

      mqtt.subscribe(`SYSTEM_${body._id}`);
      // mqtt.publish('join-class', JSON.stringify(payload));

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
    const fbText = this.state.busy ? 'Loading...' : '';

    return (
      <header className={styles.main}>
        <div className="container">
          <div className={styles.left}>
            {this.state.isLoggedIn ? (
              <User model={this.state.profile} />
            ) : (
              <Facebook callback={this.responseFacebook} textButton={fbText} />
            )}
          </div>
          <div className={styles.right}>
            <Link to="/how-it-works" className={styles.link}>Hướng dẫn?</Link>
          </div>
          <div className={styles.center}>
            <div className={this.getAnimatedClass('tada')}>
              <Link to="/" className={styles.link}>GOING SUNNY</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => dispatch({
    type: 'UPDATE_USER',
    payload,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
