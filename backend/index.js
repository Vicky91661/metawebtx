const express = require('express');
const db = require('./utils/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.post("/signin", (req,res)=>{

    const {email,password}=req.body;

    try {
        db.query("SELECT * FROM users WHERE email = ?",[email], (err,result)=>{
            if(err) {
            console.log(err)
            return res.status(400).json({
                message:"Error while fetching database"
             })
            }
            console.log(result)
            if(result.length>0){
                const DataBasePassword = result[0].pass;
                if(password===DataBasePassword){
                    return res.status(200).json({
                        token:result[0].email,
                        role:result[0].role
                     })    
                }
                return res.status(400).json({
                    message:"Password is not correct"
                 })
               
            }else{
                return res.status(400).json({
                    message:"user is not present"
                 })
            }
         
            
         }); 
    } catch (error) {
        res.status(400).json({
            message:"some error in backend"
        })
    }
    
     

});

app.post("/signup", (req,res)=>{

    try {
        const {email,password}=req.body;
        db.query("SELECT * FROM users WHERE email = ?",[email], (err,result)=>{
            if(err) {
                return res.status(400).json({
                    message:"Error while fetching database"
                })
            }
            if(result.length>0){
                return res.status(400).json({
                    message:"User already present"
                 })
            }else{
    
                db.query("INSERT INTO users (email, pass,role) VALUES (?,?,'user')",[email,password], (err,result)=>{
                    if(err) {
                        console.log("error while fetching data",err)
                        return res.status(400).json({
                            message:"Error while fetching database"
                        })
                    } 
                    return res.status(200).json({
                        token:email,
                        role:'user'
                     })
                 });
            }
         
            
         });
    } catch (error) {
        return res.status(400).json({
            message:"Something went wrong in database"
        })
    }

});

// Route to get one post
app.post("/chatbot", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM posts WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.get('/chatbot', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post


app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})