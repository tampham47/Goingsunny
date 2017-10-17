import React, {Component} from 'react';

import Header from 'core/Header';

import Pdf from './Pdf';
import Link from './Link';
import Youtube from './Youtube';

import styles from './styles.css';


class RelatedPost extends Component {
  render() {
    const { model } = this.props;
    return (
      <section className={styles.main}>
        <Header title="Documents" />
        <ul className={styles.content}>
          {model.map((item) => {
            const Elm = item.type === 'pdf' ? Pdf : item.type === 'youtube' ? Youtube : Link;
            return (
              <li key={item._id} className={styles.item}>
                <Elm item={item}/>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default RelatedPost;
