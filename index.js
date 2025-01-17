require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const conn = require("./config/db");
// const posts = require('./routes/posts')
// connectToDatabase();

// app.use('/api/posts', posts)

conn()


app.get('/', (req, res) =>{
    res.send('Home Page')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});