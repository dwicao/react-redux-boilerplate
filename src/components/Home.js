import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../actions/mainActions';

class Home extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <h1>React Redux BiolerPlate</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

function mapDispatchToProps(dispath) {
  return {
    actions: bindActionCreators(mainActions, dispath)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
