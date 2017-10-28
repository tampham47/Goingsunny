import React, {Component} from 'react';
import { isEmpty } from 'lodash';

import Header from 'core/Header';

import Video from './Video';

import styles from './styles.css';

class DailyTopic extends Component {
  render() {
    const { model } = this.props;
    return (
      <section className={styles.main}>
        <Header title="Chủ đề hằng ngày" />
        <ul className={styles.content}>
          {model.map((item, index) => {
            return (
              <li key={item.id.videoId} className={styles.item}>
                <Video item={item} index={index} model={model} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default DailyTopic;

