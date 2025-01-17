const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/' , async (req, res) => {
    try {
        const allStudents = await Student.find({})
        res.json(allStudents)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.post('/' , async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        console.log(req.body)
        res.json(newStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get('/:id' , async (req, res) =>{
    try {
       const oneStudent = await Student.findById(req.params.id)
       res.json(oneStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.put('/:id', async (req, res)=>{
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        console.log(req.params.id);
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        res.json(deletedStudent)
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})

module.exports = router;









module.exports = router 