const User = require("../models/users");
const bcrypt = require("bcrypt") ;
const {setUser} = require("../service/auth");

const registerUser = async (req , res) => {
      try {

        const {name , email , password} = req.body;

        //check user in db 
        const existingUser = await User.findOne({email});
        if(existingUser)
            return res.status(400).json({message : "user is alredy exists"});
        
        
        //hash Password
        const hashPassword = await bcrypt.hash(password , 10 ) ;

        //create User 
        const user =  await User.create({
            name,
            email,
            password:hashPassword 
        }) ;


        res.status(201).json({message: "User Register Sucessfully"});
      } catch (error) {
        res.status(500).json({error: error.message});
      }
}

const loginUser = async (req  , res)=>{
    try {
        const {email , password} = req.body ;
        const user = await User.findOne({email}); 
        if(!user)
            return res.status(400).json({message:"Invalid email "});
            console.log("User" , user)

        const isMatch = await  bcrypt.compare(password , user.password);
        if(!isMatch)
            return res.status(400).json({message: "Invalid password"});


        //genrate token 
        const token = setUser(user);
        res.json({token});
        
    } catch (error) {
       res.status(500).json({ error: error.message });  
    }
}

module.exports = {
    registerUser , loginUser 
}