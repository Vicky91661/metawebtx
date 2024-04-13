const express = require('express');
const db = require('./utils/db')
const cors = require('cors')

const app = express();

const  PORT = 3002;

const userRoutes = require("./routers/userRoutes")
const chatbotRoutes = require("./routers/chatbotRoutes")
app.use(cors());
app.use(express.json())

app.use("/user",userRoutes)
app.use("/chatbot",chatbotRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})