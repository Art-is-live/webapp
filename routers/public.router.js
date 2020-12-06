/* 
Imports
*/
    const express = require('express')
    const router = express.Router()
    const publicController = require('../controllers/public.controllers');
/* 
Declaration routes
*/
    //USERS

    // Read all routes
    router.get('/all-users', (req, res) => publicController.findAll(req, res));

    // Read one route
    router.get('/user/:id', (req, res) => publicController.findOne(req, res));


    // EVENTS

    // Read all routes
    router.get('/all-events', (req, res) => publicController.findAllEvents(req, res));

    // Read one route
    router.get('/event/:id', (req, res) => publicController.findOneEvent(req, res));

    module.exports = router