import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';


class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <section className={styles.main}>
        <div className="container">
          <p>Lorem incididunt velit nisi incididunt voluptate irure dolor. Laborum velit eu excepteur velit laborum excepteur pariatur sunt. Excepteur deserunt ad dolore sunt officia. Magna do aute adipisicing consectetur occaecat ipsum magna ea consequat voluptate minim aliqua. Adipisicing fugiat non consequat cillum Lorem voluptate esse in nisi id.</p>
        </div>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Main)
