/* 
Imports
*/
const express = require('express')
const router = express.Router()
const userController = require('../controllers/auth.controllers');
const publicController = require('../controllers/auth.controllers');
const passport = require('passport'); //=> https://www.npmjs.com/package/passport

/* 
Declaration routes
*/

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);

    //AUTHENTIFICATION - User

    //Register (Create new user)
    router.post('/register/user', (req, res) => userController.authUser(req, res));

    //Login
    router.post('/login/user',(req, res) => userController.loginUser(req, res));



    // AUTH -Me
    router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => userController.authMe(req, res));

    // Logout
    router.get('/logout', (req, res) => userController.logOut(req, res));



    //AUTHENTIFICATION - Public

    //Register (Create new public)
    router.post('/register/public', (req, res) => publicController.authHome(req, res));

    //Login
    router.post('/login/public', (req, res) => publicController.loginHome(req, res));


    // ADMIN (...)


module.exports = router