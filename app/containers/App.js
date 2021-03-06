import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import mqtt from 'middleware/mqtt';

import Header from 'components/Header';
import Skull from 'components/Skull';
import styles from './app.css';

class App extends Component {
  componentDidMount() {
    mqtt.on('connect', () => {
      mqtt.subscribe('goingsunny_system_meeting');
      mqtt.subscribe('SYSTEM_CLASS_DATA');
      console.log('goingsunny_system_meeting');
    });

    mqtt.on('close', () => {
      console.log('Goingsunny is on disconnected.');
    });

    mqtt.on('message', (topic, mess) => {
      var message = {};
      try { message = JSON.parse(mess.toString()); }
      catch (err) {}

      console.log('SOCKET', topic, message);
      window.dispatchEvent(new CustomEvent(topic, {
        detail: message,
      }));
    });

    setTimeout(() => {
      document.getElementById('splash-screen').style.display = 'none';
    }, 50);
  }

  render() {
    return (
      <main>
        <Helmet
          defaultTitle="Goingsunny"
          titleTemplate="%s - Goingsunny"
          meta={[{
            "name": "description",
            "content": "An online English club in Vietnam!!!"
          }, {
            "name": "og:image",
            "content": "/assets/english-time.jpg"
          }]}
          htmlAttributes={{"lang": "en"}}
        />
        <Header />
        {this.props.children}
        <Skull />
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
