const Note = require('../models/note');

const notesController = {
  getListNotes: async (req, res) => {
    const { author } = req.body;
    const notes = await Note.find({ author });
    res.json({ notes });
  },

  createNote: async (req, res) => {
    const { title, description, date, author } = req.body;
    const note = new Note({ title, description, date, author });

    await note.save();
    res.status(200).json({ note });
  },

  updateNote: async (req, res) => {
    const { title, description, author } = req.body;
    
    try {
      await Note.findOneAndUpdate({_id: req.params.id} , { title, description, author });
      res.status(204).json({});
    } catch(err) {
      res.status(403).json({ message: 'Note has not been updated, try again.' });
    }
  },

  deleteNote: async (req, res) => {
    try {
      await Note.findOneAndDelete({ _id:req.params.id });
      res.status(204).json({});
    } catch(err) {
      res.status(403).json({ message: 'Note has not been deleted, try again.' });
    }
  }
};

module.exports = notesController;
