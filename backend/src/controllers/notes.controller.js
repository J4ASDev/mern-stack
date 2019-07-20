const Note = require('../models/note');

const notesController = {
  getNote: async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json({ note });
  },
  
  getListNotes: async (req, res) => {
    const notes = await Note.find();
    res.json({ notes });
  },

  createNote: async (req, res) => {
    const { title, description, date, author } = req.body;
    const newNote = new Note({
      title,
      description,
      date,
      author
    });

    await newNote.save();
    res.json({ message: 'Note saved' });
  },

  updateNote: async (req, res) => {
    const { title, description, author } = req.body;

    await Note.findOneAndUpdate({_id: req.params.id} , { title, description, author });
    res.json({ message: 'Note updated' });
  },

  deleteNote: async (req, res) => {
    await Note.findOneAndDelete({ _id:req.params.id });
    res.json({ message: 'Note deleted' });
  }
};

module.exports = notesController;
