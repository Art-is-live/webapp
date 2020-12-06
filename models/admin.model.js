/*
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Schema Admin
*/


const AdminSchema = new Schema({
    pseudo: { type: String, required:true },
    email: { type: String, required:true },
    password:{ type: String, required:true },
    timestamps: Date // Moogoose use : createAt updateAt
});

/*
Export
*/
const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;
//