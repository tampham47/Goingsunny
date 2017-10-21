import React, {Component} from 'react';
import { isEmpty } from 'lodash';

import Header from 'core/Header';

import Video from './Video';

import styles from './styles.css';

const renderVideo = (model) => {
  if(model) {
    return (
      <ul className={styles.content}>
        {model.map((item) => {
          return (
            <li key={item._id} className={styles.item}>
              <Video item={item}/>
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
}

class DailyTopic extends Component {

  render() {
    const { model } = this.props;
    return (
      <section className={styles.main}>
        <Header title="Chủ đề hằng ngày" />
        {renderVideo(model)}
      </section>
    );
  }
}

export default DailyTopic;

