/*
Import
*/
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // https://www.npmjs.com/package/jsonwebtoken
const { Schema } = mongoose;
//
/*
Schema artist
*/

// First insrcirption

const UserSchema = new Schema({
    first_name: { type: String, required:true },
    last_name: { type: String},
    gender: { type: String, enum: ["male", "female", "other"], required:true},
    date_of_birth: {type: Date ,default: Date.now},
    email: { type: String, required:true },
    phone: { type: String},
    profile_picture: { type: String, required:true},
    biography: { type: String, required:true},
    password:{ type: String, required:true },
    timestamps: Date // Moogoose use : createAt updateAt
});


/* 
Methods
*/
UserSchema.methods.generateJwt = (user) => {
    // set expiration
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 59);

    const jwtObj = {
        _id: user._id,
        email: user.email,
        expireIn: '10s',
        exp: parseInt(expiry.getTime() / 100, 10)
    };

    // JWT creation 'HtKNZ24utVB1V21F67UNRxgp9RZIcO'
    return jwt.sign(jwtObj, process.env.JWT_SECRET )
};
//

/*
Export
*/
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
//