/* 
Import
*/
    const UserModel = require('../models/user.model.js');
    const EventModel = require('../models/event.model.js');


/* 
Declarations
*/

// PUBLIC
//USERS
    // Read all route
    const findAll = (req, res) => {
        UserModel.find()
        .then( data => res.status(200).json({
            method: 'GET',
            route: `/api/users/all-users`,
            data: data,
            error: null,
            status: 200
        }))
        .catch( err => res.status(502).json({
            method: 'GET',
            route: `/api/users/all-users`,
            data: null,
            error: err,
            status: 502
        }));
    }

    // Read one route (by id)
    const findOne = (req, res) => {
        UserModel.findById(req.params.id)
        .then( data => res.status(200).json({
            method: 'GET',
            route: `/api/users/user/${req.params.id}`,
            data: data,
            error: null,
            status: 200
        }))
        .catch( err => res.status(502).json({
            method: 'GET',
            route: `/api/users/user/${req.params.id}`,
            data: null,
            error: err,
            status: 502
        }));
    }

// EVENTS
    // Read all route
    const findAllEvents = (req, res) => {
        EventModel.find()
        .then( data => res.status(200).json({
            method: 'GET',
            route: `/api/users/all-events`,
            data: data,
            error: null,
            status: 200
        }))
        .catch( err => res.status(502).json({
            method: 'GET',
            route: `/api/users/all-events`,
            data: null,
            error: err,
            status: 502
        }));
    }

    // Read one route (by id)
    const findOneEvent = (req, res) => {
        EventModel.findById(req.params.id)
        .then( data => res.status(200).json({
            method: 'GET',
            route: `/api/users/event/${req.params.id}`,
            data: data,
            error: null,
            status: 200
        }))
        .catch( err => res.status(502).json({
            method: 'GET',
            route: `/api/users/event/${req.params.id}`,
            data: null,
            error: err,
            status: 502
        }));
    }

/* 
Export
*/

    module.exports = {
        findAll,
        findOne,
        findAllEvents,
        findOneEvent
    };