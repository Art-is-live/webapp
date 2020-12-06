/* 
Imports
*/
    // Modules
    require('dotenv').config();
    const express = require('express');
    const cookieParser = require('cookie-parser'); //=> https://www.npmjs.com/package/cookie-parser
    const bodyParser = require('body-parser');
    const ejs = require('ejs');
    const passport = require('passport'); //=> https://www.npmjs.com/package/passport
//

    // NodeJS modules
    const path = require('path'); //=> https://www.npmjs.com/package/path

    // Configuring the database
    const dbConfig = require('./config/db.config.js');
    const mongoose = require('mongoose');

/* 
Declarations
*/
    
    // Create express app
    const server = express();

    // Setup server port
    const port = process.env.PORT || 7000;

    //=> Body-parser
    server.use(bodyParser.json({limit: '200mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json())

    //=> Use CookieParser to setup serverside cookies
    server.use(cookieParser(process.env.COOKIE_SECRET));

    // Configuring the database
    mongoose.Promise = global.Promise;

    // View engine configuration
    server.engine( 'html', ejs.renderFile );
    server.set( 'view engine', 'html' );

    // Static path configuration
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Set AUTH router
    const authRouter = require('./routers/auth.router');

     // using as middleware
    server.use('/api/auth', authRouter);

    // Require Users routes
    const userRoutes = require('./routers/user.router')

    // using as middleware
    server.use('/api/users', userRoutes)

     // Require Users routes
     const publicRoutes = require('./routers/public.router')

     // using as middleware
     server.use('/api/public', publicRoutes)

    // Require Adminroutes
    const adminRoutes = require('./routers/admin.router')

    // using as middleware
    server.use('/api/admin', adminRoutes)

    // Connecting to the database
    mongoose.connect(dbConfig.url,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => {
        console.log("Successfully connected to the database");
        server.listen(port, () => {
            console.log({
            node: `http://localhost:${port}`
            });
        });
    })
    .catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });