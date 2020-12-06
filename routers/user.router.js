/* 
Imports
*/
    const express = require('express')
    const router = express.Router()
    const userController = require('../controllers/user.controllers');
/* 
Declaration routes
*/

    //USERS

    // Read all routes
    router.get('/all-users', (req, res) => userController.findAll(req, res));

    // Read one route
    router.get('/user/:id', (req, res) => userController.findOne(req, res));

    // Update a user with id
    router.put('/updating/:id', (req, res) => userController.updateItem(req, res));

    // Delete a user with id (with events linked)
    router.delete('/remove/:id', (req, res) => userController.deleteItem(req, res));


    // EVENTS

    //Create new event
    router.post('/create/event', (req, res) => userController.createEvent(req, res));

    // Read all routes
    router.get('/all-events', (req, res) => userController.findAllEvents(req, res));

    // Read one route
    router.get('/event/:id', (req, res) => userController.findOneEvent(req, res));

    // Update an event with id
    router.put('/updating-event/:id', (req, res) => userController.updateEvent(req, res));

    // Delete an event with id
    router.delete('/remove-event/:id', (req, res) => userController.deleteEvent(req, res));

    // Delete events linked with user
    router.delete('/remove-event-user', (req, res) => userController.deleteEventbyUser(req, res));

    module.exports = router