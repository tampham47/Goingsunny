import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import config from 'config';

import moment from 'moment';
import styles from './styles.css';


class Main extends Component {
  static initial() {
    const sessionName = moment().format('YYYYMMDD');
    return fetch(`${config.API_BASE_URL}/sesion?query={sessionName:${sessionName}}`, {
      method: 'GET'
    })
    .then(response => { return response.json(); });
  }

  // static fetchData({ store, params, history }) {
  //   let { id } = params;
  //   return Main.initial();
  // }

  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      joinedUsers: [],
    }
  }

  componentDidMount() {
    Main.initial().then(body => {
      console.log('joinedUsers', body);
      this.setState({ joinedUsers: body });
    })
    .catch(err => {
      this.setState({ err });
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet title="Main" />
        <h1 className={styles.title}>Main</h1>
        <div>
          <img src="/assets/images/head.png"/>
        </div>
        <Link to="/">back to home</Link>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Main)
