const router = require('express').Router();
const {
  getListNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller');

router.route('/')
  .post(getListNotes);
  
router.route('/create')
  .post(createNote);

router.route('/:id')
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;