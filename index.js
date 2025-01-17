require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const conn = require("./config/db");
const seniorStudents = require('./config/seed')
const Student = require('./models/student')
const studentRoutes = require('./routes/studentRoutes')

// connectToDatabase();
app.use(express.json())

app.use('/api/students', studentRoutes)

conn()


app.get('/', (req, res) =>{
    res.send('Home Page')
})

app.get('/students/seed' , async (req, res) =>{
  try {
    await Student.deleteMany({})
    await Student.create(seniorStudents)
    res.json(seniorStudents)
  } catch (error) {
    console.log(`Something went wrong loading seed data: ${error.message}`)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});