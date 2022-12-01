const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        //enum:['reading', 'watching'],
        required: [true, 'must provide a name'],
        trim:true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },

    description:{
        type: String,
        required: [true, 'must provide description'],
        trim:true,
        maxlength: [50, 'description can not be more than 40 characters'],
    },
        
    completed:{
            type:Boolean, 
            default:false,
    },

})

module.exports = mongoose.model('Task', TaskSchema);