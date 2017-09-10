import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import styles from './app.css';

import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <main>
        <Helmet
          defaultTitle="Goingsunny"
          titleTemplate="%s - Goingsunny"
          meta={[{
            "name": "description", 
            "content": "The biggest online English club in Vietnam!!!"
          },]}
          htmlAttributes={{"lang": "en"}}
        />
        <Header />
        {this.props.children}
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
