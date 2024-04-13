const db = require('../utils/db');

const postMessage = (req,res)=>{
    const {firstName,lastName,email,phone,sub,message}=req.body;
    db.query("INSERT INTO chatbot (firstName,lastName,email,phone,sub,message) VALUES (?,?,?,?,?,?)",
    [firstName,lastName,email,phone,sub,message], (err,result)=>{
            if(err) {
                console.log("error while fetching data",err.sqlMessage)
                return res.status(400).json({
                    message:err.sqlMessage
                })
            } 
            console.log(result)
            return res.status(200).json({
                message:"sucessfull"
            })
        });
}

const getAllMessages = (req,res)=> {

    db.query("SELECT * FROM chatbot", (err,result)=>{
        if(err) {
            console.log(err)
            return res.status(400).json({
                message:err.sqlMessage
            })
        } 
        console.log(result)
        res.status(200).json({
            message:result
        })
    });   
}

const deleteMessage = (req,res)=>{
    const id = req.body.id;

    db.query("DELETE FROM chatbot WHERE id= ?", id, (err,result)=>{
        if(err) {
            return res.status(400).json({
                message:err.sqlMessage
            })
        }
        res.status(200).json({
            message:"okey"
        }) 
    }) 
}

module.exports = {postMessage,getAllMessages,deleteMessage}

