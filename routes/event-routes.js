const express = require('express');
const eventsController = require('../controllers/events-controllers');
const event = express.Router();

event.post('/', eventsController.addEvent);
event.get('/', eventsController.getAll);
event.get('/id/:id', eventsController.getById);
event.get('/name/:name', eventsController.getByEventName);
event.get('/state/:state', eventsController.getByState);
event.put('/:id', eventsController.editEvent);
events.delete('/:id', eventsController.deleteEvent);

module.exports = event

