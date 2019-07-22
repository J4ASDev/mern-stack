import React from 'react';
import { Wrapper, NoteWrapper, NoteHead } from './styles';
import { FormInput, FormTextArea, Button } from '../../libs/globalStyles';

const HomeLayout = ({ notes, handleUpdate, handleDelete }) => (
  <Wrapper>
    { notes && notes.map(item => {
      const { _id, title, description, author, date } = item;
      return (
        <NoteWrapper id={_id} key={_id}>
          <NoteHead>
            <FormInput value={title} readOnly />
            <Button onClick={() => handleUpdate({_id, title, description, author, date})}>
              <i className='far fa-edit' />
            </Button>
            <Button onClick={() => handleDelete(_id, author)}>
              <i className='fas fa-trash' />
            </Button>
          </NoteHead>
          <FormTextArea value={description} readOnly />
          <FormInput value={author} readOnly />
          <FormInput value={date && date.slice(0, 10)} readOnly />
        </NoteWrapper>
      )
    })}
  </Wrapper>
);

export default HomeLayout;
