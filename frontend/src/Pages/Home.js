import React, { Component } from 'react';
import HomeLayout from '../Components/Home';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/notes';

class Home extends Component {
  handleDelete = (id, author) => {
    this.props.actions.deleteNote(id, {author});
    this.props.history.go(0);
  }

  handleUpdate = note => {
    const { _id, author, date, description, title } = note;

    this.props.actions.assingStateNote({ _id, author, date, description, title });
    this.props.history.push('/create-note');
  }
  
  render() {
    const { notes } = this.props;
    return (
      <HomeLayout
        notes={notes}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
      />
    );
  }

  componentDidMount() {
    const { author } = this.props;
    this.props.actions.getListNotes({ author });
  }
}

const mapStateToProps = ({ loginAndSignin, notes }) => ({
  author: loginAndSignin.username,
  notes: notes.allNotes
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
