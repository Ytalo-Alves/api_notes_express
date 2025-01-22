const { Router } = require('express');
const NotesController = require('../controllers/notes_controller');

const notesRouter = Router()

const notesController = new NotesController()

notesRouter.post('/:id', notesController.create)

module.exports = notesRouter;
