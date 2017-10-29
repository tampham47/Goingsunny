import React, { Component } from 'react';

import config  from 'config';
import Detail from './Detail';
import Modal from 'core/Modal';

import iconNote from './ico-note.svg';
import styles from './styles.css';

class NoteDocument extends Component {
  constructor(props){
    super(props);

    this.state = {
      isShowDetail: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleOnClick() {
    this.setState({
      isShowDetail: !this.state.isShowDetail,
    });
  }

  handleDismiss() {
    this.setState({ isShowDetail: false });
  }

  getImage(item) {
    if(item.cover) {
      return `${config.API_IMAGE_URL}/${item.cover.filename}`;
    }
    return require('../default.png');
  }

  render() {
    const { item } = this.props;
    return (
      <div className={styles.main} onClick={this.handleOnClick}>
        <div className={styles.header}>
          <img className={styles.background} src={this.getImage(item)} />
          <img className={styles.icon} src={iconNote} />
        </div>
        <div className={styles.title}>
          {item.title}
        </div>
        <Modal isShow={this.state.isShowDetail} dismiss={this.handleDismiss}>
          <Detail isShow={this.state.isShowDetail} item={item} imgSrc={this.getImage(item)} />
        </Modal>
      </div>
    );
  }
}

export default NoteDocument;
