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
        console.log(req.body)
        res.json(newStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get('/:id' , async (req, res) =>{
    try {
       const oneStudent = Student.findById(req.params.id)
       res.json(oneStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.put('/:id', async (req, res)=>{
    try {
        const updatedStudent = await Fruit.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

module.exports = router;









module.exports = router 