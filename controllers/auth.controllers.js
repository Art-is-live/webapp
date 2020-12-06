/* 
Import
*/
const UserModel = require('../models/user.model.js');
const EventModel = require('../models/event.model.js');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');


/* 
Declarations
*/

    // AUTH : Register - User
    const authUser = (req, res) => {
        // Encrypt user password
        bcrypt.hash( req.body.password, 10 )
        .then( hashedPassword => {
            // Change user password
            req.body.password = hashedPassword;
            
            // Save user data
            UserModel.create(req.body)
            .then( document => res.status(201).json({
                method: 'POST',
                route: `/api/auth/register/user`,
                data: document,
                error: null,
                status: 201
            }))
            .catch( err => res.status(502).json({
                method: 'POST',
                route: `/api/auth/register/user`,
                data: null,
                error: err,
                status: 502
            }));
        })
        .catch( hashError => res.status(500).json({
            method: 'POST',
            route: `/api/auth/register/user`,
            data: null,
            error: hashError,
            status: 500
        }));
    }
    
    // AUTH : Login - User
    const loginUser = (req, res) => {
        UserModel.findOne({ email: req.body.email }, (err, user) => {
            if(err){
                return res.status(500).json({
                    method: 'POST',
                    route: `/api/users/login/user`,
                    data: null,
                    error: err,
                    status: 500
                });
            }
            else{
                // Check user password
                const validPassword = bcrypt.compareSync(req.body.password, user.password);
                if( !validPassword ){
                    return res.status(500).json({
                        method: 'POST',
                        route: `/api/users/login/user`,
                        data: req.cookies,
                        error: 'Invalid password',
                        status: 500
                    });
                }
                else{
                    // Generate user JWT
                    res.cookie(process.env.COOKIE_NAME, user.generateJwt(user));

                    // Return user data
                    return res.status(201).json({
                        method: 'POST',
                        route: `/api/users/login/user`,
                        data: user,
                        error: null,
                        status: 201
                    });
                };
            };
        });
    }

    // AUTH: User account 
     const authMe = (req, res) => {
        Promise.all([
            UserModel.findById(req.user._id),
            EventModel.find({ author: req.user._id })
        ])
        .then(jsonData => {
            return res.status(201).json({
                method: 'GET',
                route: `/api/auth/me`,
                data: { profile: jsonData[0], eventsUser: jsonData[1]},
                error: null,
                status: 200
            });
        })
        .catch( jsonErr => {
            return res.status(500).json({
                method: 'GET',
                route: `/api/auth/me`,
                data: null,
                error: jsonErr,
                status: 500
            });
        });
    }

    // Log out
    const logOut = (req, res) => {
        // Delete cookie
        res.clearCookie(process.env.COOKIE_NAME);
        //res.cookie(process.env.COOKIE_NAME).set({expires: Date.now()})
        req.logout();

        res.status(200).json({
            method: 'GET',
            route: `/`,
            data: null,
            error: null,
            status: 200
        });
    }
 

/*
     // AUTH : Register - Public
     const authHome = (req, res) => {
        // Encrypt user password
        bcrypt.hash( req.body.password, 10 )
        .then( hashedPassword => {
            // Change user password
            req.body.password = hashedPassword;
            
            // Save user data
            PublicModel.create(req.body)
            .then( document => res.status(201).json({
                method: 'POST',
                route: `/api/auth/register/public`,
                data: document,
                error: null,
                status: 201
            }))
            .catch( err => res.status(502).json({
                method: 'POST',
                route: `/api/auth/register/public`,
                data: null,
                error: err,
                status: 502
            }));
        })
        .catch( hashError => res.status(500).json({
            method: 'POST',
            route: `/api/auth/register/public`,
            data: null,
            error: hashError,
            status: 500
        }));
    }

  // Auth : login - Public
  const loginHome= (req, res) => {
    // Get user from email
    PublicModel.findOne({ email: req.body.email }, (err, user) => {
       if(err){
           return res.status(500).json({
               method: 'POST',
               route: `/api/auth/login/public`,
               data: null,
               error: err,
               status: 500
           });
       }
       else{
           // Check user password
           const validPassword = bcrypt.compareSync(req.body.password, user.password);
           if( !validPassword ){
               return res.status(500).json({
                   method: 'POST',
                   route: `/api/auth/login/public`,
                   data: null,
                   error: 'Invalid password',
                   status: 500
               });
               
           }
           else{
               return res.status(201).json({
                   method: 'POST',
                   route: `/api/auth/login/public`,
                   data: user,
                   error: null,
                   status: 201
               });
           };
       };
   });
}

    /* 
Export
*/

module.exports = {
    authUser,
    loginUser,
    authMe,
    logOut,
    /* authHome,
    loginHome, */
};