import React, { Component } from 'react';
import { connect } from 'react-redux';
import mqtt from 'middleware/mqtt';
import moment from 'moment';

import View from './View';


class HeroContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isJoined: false,
    };

    this.facebookLogin = this.facebookLogin.bind(this);
    this.joinNextSession = this.joinNextSession.bind(this);
  }

  componentDidMount() {}
  facebookLogin() {}

  joinNextSession() {
    const payload = {
      user: this.props.user,
      session: moment().format('YYYYMMDD'),
    }

    mqtt.publish('join-class', JSON.stringify(payload));
  }

  render() {
    let showTimer = false;
    const today = moment().utcOffset(7);
    const { user } = this.props;

    if (today.get('hour') < 20) {
      today.set({ hour: 20, minute: 0, second: 0, millisecond: 0 });
      showTimer = true;
    }

    return (
      <View
        showTimer={showTimer} user={user} today={today}
        joinNextSession={this.joinNextSession}
      />
    )
  }
}

export default HeroContainer;
