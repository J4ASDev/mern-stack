import React, { Component } from 'react';
import NotesLayout from '../Components/Notes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/notes';

class Notes extends Component {

  handleForm = event => {
    event.preventDefault();

    const form = document.getElementById('notesForm');
    const data = new FormData(form);

    const id = this.props.idNote;
    const title = data.get('title');
    const description = data.get('description');
    const author = data.get('author');
    const date = data.get('date') || new Date();

    if (!id) this.props.actions.createNote({ title, description, author, date });

    if (id) {
      this.props.actions.updateNote(id, { title, description, author, date });
      this.props.actions.assingStateNote({});
    }
    
    this.props.history.push('/');
  }

  render() {
    const { username, title, description, date } = this.props;
    return (
      <NotesLayout
        handleForm={this.handleForm}
        author={username}
        title={title}
        description={description}
        date={date}
      />
    );
  }
}

const mapStateToProps = ({ notes, loginAndSignin }) => ({
  username: loginAndSignin.username,
  idNote: notes.id,
  title: notes.title,
  description: notes.description,
  date: notes.date,
});

const mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
