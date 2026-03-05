const User = require("../models/users");
const bcrypt = require("bcrypt") ;
const {setUser} = require("../service/auth");
const { OAuth2Client } = require("google-auth-library");

const registerUser = async (req , res) => {
      try {
       
        const {name , email , password} = req.body;

        require('dotenv').config();
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
        res.json({token , user});
        
    } catch (error) {
       res.status(500).json({ error: error.message });  
    }
}


const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

  
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

    // ✅ FIX IS HERE
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // MUST be the string
    });

    const payload = ticket.getPayload();
    const { name, email, picture,  sub } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: null,
        googleId: sub,
        profileImage: picture ,
      });
    }

    const appToken = setUser(user);

    res.json({ 
        token: appToken ,
        user:{
            name: user.name,
            email: user.email,
            profileImage: user.profileImage,
        },
     });

  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ message: "Google authentication failed" });
  }
};
module.exports = {
    registerUser , loginUser , googleAuth
}