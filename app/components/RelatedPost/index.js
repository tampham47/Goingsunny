import React, {Component} from 'react';

import Header from 'core/Header';

import Pdf from './Pdf';
import Link from './Link';
import Youtube from './Youtube';
import Note from './Note';

import styles from './styles.css';

class RelatedPost extends Component {
  constructor(props){
    super(props);

    this.getTypeOfPost = this.getTypeOfPost.bind(this);
  }

  getTypeOfPost(type) {
    switch(type) {
      case 'pdf':
        return Pdf;
      case 'youtube':
        return Youtube;
      case 'link':
        return Link;
      default:
        return Note;
    }
  }

  render() {
    const { model } = this.props;
    return (
      <section className={styles.main}>
        <Header title="Tài liệu" />
        <ul className={styles.content}>
          {model.map((item) => {
            const Elm = this.getTypeOfPost(item.type);
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
