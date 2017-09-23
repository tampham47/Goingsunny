import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import FacebookLogin from 'react-facebook-login';

import styles from './styles.css';


class ReactComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.responseFacebook = this.responseFacebook.bind(this);
  }

  componentDidMount() {
    // var data = AppStorage.getData();
    // if (data && data.accessToken) {
    //   this.props.dispatch(loadProfileByToken({ accessToken: data.accessToken }));
    // }
  }

  responseFacebook(res) {
    // console.log('responseFacebook', res);
    // this.setState({
    //   name: res.name,
    // });

    fetch(`/auth/facebook/token?access_token=${res.accessToken}`, {
      method: 'GET',
    })
    .then(response => {
      // response.status     //=> number 100–599
      // response.statusText //=> String
      // response.headers    //=> Headers
      // response.url        //=> String
      return response.json();
    })
    .then(body => {
      console.log('profile', body);
      this.setState({
        name: body.displayName + ' ' + body.username,
      });
    })
    .catch(err => {
      console.log('err', err);
    });
  }

  render() {
    return (
      <div>
        <FacebookLogin 
          cssClass="button button-primary facebook"
          appId="1391679424181926" 
          fields="name,email,picture"
          autoLoad={true} 
          scope="public_profile"
          callback={this.responseFacebook} />
        <p>{this.state.name}</p>
      </div>
    )
  }
}

ReactComp.propTypes = {};
export default ReactComp;
