/* 
Import
*/
    const UserModel = require('../models/user.model.js');
    const EventModel = require('../models/event.model.js');
    const bcrypt = require('bcrypt');

/* 
Declarations
*/
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
    };

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
    };


    // Update a route
    const updateItem = (req, res) => {
        // Encrypt user password
        bcrypt.hash( req.body.password, 10 )
        .then( hashedPassword => {
            // Change user password
            req.body.password = hashedPassword;
            
            // Save user data
            UserModel.findById(req.params.id)
            .then( document => {
                // Update document
                document.first_name = req.body.first_name;
                document.last_name = req.body.last_name;
                document.gender = req.body.gender;
                document.date_of_birth = req.body.date_of_birth;
                document.email = req.body.email;
                document.phone = req.body.phone;
                document.profile_picture = req.body.profile_picture;
                document.biography = req.body.biography;
                document.profile_picture = req.body.profile_picture;
                document.password = req.body.password;
                document.timestamps = req.body.timestamps;
                    
                // Save document
                document.save()
                .then( updatedDocument => res.status(200).json({
                    method: 'PUT',
                    route: `/api/users/updating/${req.params.id}`,
                    data: updatedDocument,
                    error: null,
                    status: 200
                }))
                .catch( err => res.status(502).json({
                    method: 'PUT',
                    route: `/api/users/updating/${req.params.id}`,
                    data: null,
                    error: err,
                    status: 502
                }));
            })
            .catch( err => res.status(502).json({
                method: 'POST',
                route: `/api/auth/register/user`,
                data: null,
                error: err,
                status: 502
            }));
        })
        .catch( err => res.status(404).json({
            method: 'PUT',
            route: `/api/users/updating/${req.params.id}`,
            data: null,
            error: err,
            status: 404
        }));
    };

    const deleteItem = (req, res) => {
    UserModel.findOneAndDelete({ _id: req.params.id })
    .then( deletedDocument => res.status(200).json({
            method: 'DELETE',
            route: `/api/users/remove/${req.params.id}`,
            data: deletedDocument,
            error: null,
            status: 200
    }))
    .catch( err => res.status(404).json({
        method: 'DELETE',
        route: `/api/users/remove/${req.params.id}`,
        data: null,
        error: err,
        status: 404
    }));
    }

//EVENTS
    //Create route
    const createEvent = (req, res) => { 
        EventModel.create(req.body)
        .then(data => res.status(201).json({
            method: 'POST',
            route: `/api/users/create/event`,
            data: data,
            error: null,
            status: 201
        }))    
        .catch(err => res.status(500).json({
            method: 'POST',
            route: `/api/users/create/event`,
            data: null,
            error: err,
            status: 502
        }))
    };

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
 
    // Update a route
    const updateEvent = (req, res) => {
        EventModel.findById(req.params.id)
    .then( document => {
        // Update document
        document.author = req.body.author;
        document.name = req.body.name;
        document.date = req.body.date;
        document.picture_one = req.body.picture_one;
        document.description = req.body.description;
        document.url = req.body.url;

        // Save document
        document.save()
        .then( updatedDocument => res.status(200).json({
            method: 'PUT',
            route: `/api/users/updating-event/${req.params.id}`,
            data: updatedDocument,
            error: null,
            status: 200
        }))
        .catch( err => res.status(502).json({
            method: 'PUT',
            route: `/api/users/updating-event/${req.params.id}`,
            data: null,
            error: err,
            status: 502
        }));
    })
    .catch( err => res.status(404).json({
        method: 'PUT',
        route: `/api/users/updating-event/${req.params.id}`,
        data: null,
        error: err,
        status: 404
    }));
    };


    // Delete a route by id
    const deleteEvent = (req, res) => {
        EventModel.findOneAndDelete({ _id: req.params.id })
        .then( deletedDocument => res.status(200).json({
                method: 'DELETE',
                route: `/api/users/remove-event/${req.params.id}`,
                data: deletedDocument,
                error: null,
                status: 200
        }))
        .catch( err => res.status(404).json({
            method: 'DELETE',
            route: `/api/users/remove-event/${req.params.id}`,
            data: null,
            error: err,
            status: 404
        }));
    }
/* 
Export
*/

    module.exports = {
        findAll,
        findOne,
        updateItem,
        deleteItem,
        createEvent,
        findAllEvents,
        findOneEvent,
        updateEvent,
        deleteEvent
        };