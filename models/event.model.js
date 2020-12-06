/*
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Schema event
*/

const EventSchema = new Schema({
    author: { type: String, required:true },
    name: { type: String, required:true },
    date: {type: Date , default: Date.now, required:true},
    picture_one: { type: String , required:true},
    description: { type: String, required:true },
    url:{ type: String, required:true },
    timestamps: Date // Moogoose use : createAt updateAt
});
 
/*
Export
*/
const EventModel = mongoose.model('Event', EventSchema);
module.exports = EventModel;
//