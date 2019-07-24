import React from 'react';
import { Wrapper, FormWrapper } from './styles';
import { FormInput, FormTextArea, Button } from '../../libs/globalStyles';

const NotesLayout = ({ titleForm, btnTxt, handleForm, title, description, author, date }) => (
  <Wrapper>
    <h1>{ titleForm }</h1>
    <FormWrapper id='notesForm' onSubmit={handleForm}>
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
      <Button>{ btnTxt }</Button>
    </FormWrapper>
  </Wrapper>
);

export default NotesLayout;
