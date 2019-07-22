import {
  GET_ALL_NOTES,
  GET_ALL_NOTES_FAILED,
  CREATE_NOTE,
  CREATE_NOTE_FAILED,
  DELETE_OR_UPDATE_NOTE
} from '../actionTypes';
import Fetch from '../libs/Fetch';

export const assingStateNote = data => {
  return dispatch => {
    dispatch({
      type: CREATE_NOTE,
      payload: data
    });
  }
}

export const getListNotes = author => {
  return async dispatch => {
    try {
      const request = await Fetch.post(`/notes`, author);
      const { notes } = await request.json();

      return dispatch({
        type: GET_ALL_NOTES,
        payload: { notes }
      });
    } catch (err) {
      return dispatch({ type: GET_ALL_NOTES_FAILED });
    }
  }
}

export const createNote = data => {
  return async dispatch => {
    try {
      const request = await Fetch.post(`/notes/create`, data);
      const { note: { _id, author, title, description, date } } = await request.json();
      const status = await request.status;
      
      if(status >= 400) return dispatch({ type: CREATE_NOTE_FAILED });

      assingStateNote({ _id, author, title, description, date })
    } catch (err) {
      return dispatch({ type: CREATE_NOTE_FAILED });
    }
  }
}

export const deleteNote = id => {
  return async dispatch => {
    try {
      await Fetch.delete(`/notes/${id}`);

      dispatch({ type: DELETE_OR_UPDATE_NOTE });
    } catch (err) {
      return dispatch({ type: DELETE_OR_UPDATE_NOTE });
    }
  }
}

export const updateNote = (id, data) => {
  return async dispatch => {
    try { 
      await Fetch.put(`/notes/${id}`, data);

      dispatch({ type: DELETE_OR_UPDATE_NOTE });
    } catch (err) {
      return dispatch({ type: DELETE_OR_UPDATE_NOTE });
    }
  }
}
