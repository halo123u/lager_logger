const express = require("express");
const notesRoutes = express.Router();

const notesController = require("../controllers/notes-controller")

notesRoutes.post("/", notesController.create);
notesRoutes.get("/type/:note_type",notesController.findAllByType)
notesRoutes.post("/type/:note_type",notesController.findAllByRelationship)
notesRoutes.put("/:note_id", notesController.update);
notesRoutes.get("/:note_id", notesController.findById);
notesRoutes.delete("/:note_id", notesController.delete);

notesRoutes.get('/comps/accounts', notesController.getWithCompany);

module.exports = notesRoutes;
