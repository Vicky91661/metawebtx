const db = require('./../utils/db')

 const signin = (req,res)=>{

    const {email,password}=req.body;

    try {
        db.query("SELECT * FROM users WHERE email = ?",[email], (err,result)=>{
            if(err) {
            console.log(err)
            return res.status(400).json({
                message:err.sqlMessage
             })
            }
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
}

const signup = (req,res)=>{

    try {
        const {email,password}=req.body;
        db.query("SELECT * FROM users WHERE email = ?",[email], (err,result)=>{
            if(err) {
                return res.status(400).json({
                    message:err.sqlMessage
                })
            }
            if(result.length>0){
                return res.status(400).json({
                    message:"User already present"
                 })
            }else{
    
                db.query("INSERT INTO users (email, pass,role) VALUES (?,?,'user')",[email,password], (err,result)=>{
                    if(err) {
                        return res.status(400).json({
                            message:err.sqlMessage
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

}

module.exports  = {signin,signup}