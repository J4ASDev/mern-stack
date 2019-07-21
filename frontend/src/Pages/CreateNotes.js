import React, { Component } from 'react';
import CreateNotesLayout from '../Components/CreateNotes';

import { connect } from 'react-redux';
import { getListNotes } from '../actions/notes';

class CreateNotes extends Component {
  render() {
    return (
      <CreateNotesLayout />
    );
  }
}

const mapStateToProps = ({ notes }) => ({
  notes
});

const mapDispatchToProps = {
  getListNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotes);
