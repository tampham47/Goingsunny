import P from 'prop-types';
import React from 'react';
import FacebookLogin from 'react-facebook-login';

import styles from './styles.css';


const Facebook = (props) => {
  return (
    <FacebookLogin 
      cssClass="button button-primary facebook"
      appId="1391679424181926" 
      fields="name,email,picture"
      scope="public_profile"
      autoLoad={true} 
      callback={props.callback} 
    />
  );
};

Facebook.propTypes = {
  callback: P.func.isRequired,
};
export default Facebook;
