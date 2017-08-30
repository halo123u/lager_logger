const express = require("express");
const notesRoutes = express.Router();

const notesController = require("../contollers/notes-controller")

notesRoutes.post("/", notesController.create);
notesRoutes.get("/type/:type",notesController.findByType)
notesRoutes.post("/type/:type",notesController.findByrelationship)
notesRoutes.put("/:note_id", notesController.update);
notesRoutes.get("/:note_id", notesController.findById);
notesRoutes.delete("/:note_id", notesController.delete);

module.exports = notesController
