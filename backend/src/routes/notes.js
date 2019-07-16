const router = require('express').Router();
const {
  getNote,
  getListNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller');

router.route('/')
  .get(getListNotes)
  .post(createNote);

router.route('/:id')
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;