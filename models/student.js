const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        index: true
    },

    gpa:{
        type: Number,
        required: true
    },

    gradeLevel: {
        type: Number,
        enum: [12],
        required: true
    },

    college:{
        type: String,
        enum: ["Accepted", "Not Accepted", "Not Going to College"],
        required: true}
    
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student 