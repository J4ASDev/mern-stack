import React, { Component } from 'react';
import HomeLayout from '../Components/Home';

import { connect } from 'react-redux';
import { getListNotes } from '../actions/notes';

class Home extends Component {
  render() {
    return (
      <HomeLayout />
    );
  }

  componentDidMount() {
    // this.props.getListNotes()
  }
}

const mapStateToProps = ({ notes }) => ({
  notes
});

const mapDispatchToProps = {
  getListNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
