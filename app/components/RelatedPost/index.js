import React, {Component} from 'react';
import styles from './styles.css';

import Header from 'core/Header';
import Pdf from './Pdf';
import Youtube from './Youtube';
import Link from './Link';
import Modal from 'core/Modal';
import Detail from './Youtube/Detail';

class RelatedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
      currentItem: '',
    };
    this.handleDissmiss = this.handleDissmiss.bind(this);
  }

  handleOnClick(item) {
    this.setState({ isShowDetail: !this.state.isShowDetail });
    this.setState({ currentItem: item });
  }

  handleDissmiss() {
    this.setState({ isShowDetail: false });
  }

  render(){
    const { model } = this.props;
    return (
      <section className={styles.main}>
        <Header title="Documents" />
        <ul className={styles.content}>
          {model.map((item) => {
            const Elm = item.type === 'pdf' ? Pdf : item.type === 'youtube' ? Youtube : Link;
            return (
              <li key={item._id} className={styles.item}>
                <Elm item={item} handleOnClick={this.handleOnClick.bind(this, item)}/>
              </li>
            );
          })}
        </ul>
        <Modal isShow={this.state.isShowDetail} dismiss={this.handleDissmiss}>
          <Detail isShow={this.state.isShowDetail} item={this.state.currentItem}/>
        </Modal>
      </section>
    );
  }
}

export default RelatedPost;

