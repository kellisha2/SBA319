const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        index: true
    },

    state:{
        type: String,
        required: true
    },
    minimumGPA:{
        type:Number,
        required: true
    }
  
})

const College = mongoose.model('College', collegeSchema);

module.exports = College