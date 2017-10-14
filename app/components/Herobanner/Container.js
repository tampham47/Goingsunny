import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import View from './View';


class HeroContainer extends Component {
  constructor(props) {
    super(props);
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  facebookLogin() {
    console.log('facebookLogin');
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
      <View showTimer={showTimer} user={user} today={today} />
    )
  }
}

export default HeroContainer;
