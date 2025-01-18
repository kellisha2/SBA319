const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        index: true
    },
    subject:{
        type:String,
        required: true,
        enum: ["Math", "English", "History", "Science"],
    }
})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher  