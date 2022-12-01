const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        //enum:['reading', 'watching'],
        required: [false, 'must provide a name'],
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

//Require that every task start with a capital letter. 
TaskSchema.pre('save', function (next) {
    const words = this.name.split(' ')
    this.name = words
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join(' ')
    next()
    /*function capitalizeFirstLetter(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    this.name = capitalizeFirstLetter(this.name);
    next()*/
})

module.exports = mongoose.model('Task', TaskSchema);