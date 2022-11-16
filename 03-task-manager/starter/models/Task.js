const mongoose = require('mongoose');

//set up structure for all doc
const TaskSchema = new mongoose.Schema({
    name:String, completed:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)