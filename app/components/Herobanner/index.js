import React from 'react';
import { connect } from 'react-redux';
import Container from './Container';


const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Container);
