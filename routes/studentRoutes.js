const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/' , (req, res) => {
    try {
        const allStudents = Student.find({})
        res.json(allStudents)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.post('/' , async (req, res) => {
    try {
        const newStudent = Student.create(req.body)
        console.log(newStudent)
        res.json(newStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;









module.exports = router 