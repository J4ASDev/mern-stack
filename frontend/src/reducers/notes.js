import {
  GET_ALL_NOTES,
  GET_ALL_NOTES_FAILED,
  CREATE_NOTE,
  CREATE_NOTE_FAILED,
  DELETE_OR_UPDATE_NOTE
} from '../actionTypes';

const initialState = {
  allNotes: [],
  id: null,
  title: null,
  description: null,
  author: null,
  date: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES: {
      const { notes } = action.payload;
      return {
        ...state,
        allNotes: [ ...notes ]
      }
    }

    case CREATE_NOTE: {
      const { _id, author, title, description, date } = action.payload;

      return { 
        ...state,
        id: _id,
        author,
        title,
        description,
        date
      };
    }

    case DELETE_OR_UPDATE_NOTE:
    case GET_ALL_NOTES_FAILED:
    case CREATE_NOTE_FAILED:
    default:
      return state;
  }
}
