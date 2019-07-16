const notesCtrl = {
  getNote: (req, res) => {
    res.json({ message: {} });
  },

  getListNotes: (req, res) => {
    res.json({ message: [] });
  },

  createNote: (req, res) => {
    res.json({ message: 'Note saved' });
  },

  updateNote: (req, res) => {
    res.json({ message: 'Note updated' });
  },

  deleteNote: (req, res) => {
    res.json({ message: 'Note deleted' });
  }
};

module.exports = notesCtrl;
