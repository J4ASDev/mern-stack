import React from 'react';
import { Wrapper, FormWrapper } from './styles';
import { FormInput, FormTextArea, Button } from '../../libs/globalStyles';

const NotesLayout = ({ handleForm, title, description, author, date }) => (
  <Wrapper>
    <h1>{ title ? 'Edit a note' : 'Create a new note' }</h1>
    <FormWrapper id='notesForm' onSubmit={event => handleForm(event, title)}>
      <FormInput
        name='title'
        type='text'
        placeholder='Title'
        defaultValue={title}
        required
      />
      <FormTextArea
        name='description'
        type='textarea'
        placeholder='Description'
        defaultValue={description}
        required
      />
      <FormInput
        name='author'
        type='text'
        value={author}
        readOnly
        required
      />
      <FormInput
        name='date'
        type='date'
        defaultValue={date}
      />
      <Button>{ title ? 'Edit' : 'Create' }</Button>
    </FormWrapper>
  </Wrapper>
);

export default NotesLayout;
