/* 
Imports
*/
    const express = require('express')
    const router = express.Router()
    const adminController = require('../controllers/admin.controllers');
/* 
Declaration routes
*/
    //USERS

    // Create one route
    router.post('/register/new_user', (req, res) => adminController.createItem(req, res));

    // Read all routes
    router.get('/all-users', (req, res) => adminController.findAll(req, res));

    // Read one route
    router.get('/user/:id', (req, res) => adminController.findOne(req, res));

    // Update a user with id
    router.put('/updating/:id', (req, res) => adminController.updateItem(req, res));

    // Delete a user with id (with events linked)
    //router.delete('/remove/:id', (req, res) => adminController.deleteItem(req, res));


    // PUBLIC

    // Read all routes
    router.get('/all-publics', (req, res) => adminController.findAllPublic(req, res));


    // EVENTS

    //Create new event
    router.post('/create/event', (req, res) => adminController.createEvent(req, res));

    // Read all routes
    router.get('/all-events', (req, res) => adminController.findAllEvents(req, res));

    // Read one route
    router.get('/event/:id', (req, res) => adminController.findOneEvent(req, res));

    // Update an event with id
    router.put('/updating-event/:id', (req, res) => adminController.updateEvent(req, res));

    // Delete an event with id
    router.delete('/remove-event/:id', (req, res) => adminController.deleteEvent(req, res));

    module.exports = router