/*
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Schema public
*/

const PublicSchema = new Schema({
    first_name: { type: String, required:true },
    last_name: { type: String, required:true },
    gender: { type: String, enum: ["male", "female", "other"]},
    date_of_birth: {type: Date , default: Date.now,  required:true},
    email: { type: String, required:true },
    phone: { type: String, required:true },
    password:{ type: String, required:true },
    timestamps: Date // Moogoose use : createAt updateAt
});

/*
Export
*/
const PublicModel = mongoose.model('Public', PublicSchema);
module.exports = PublicModel;
//