const User = require("../model/usermodel");
const bcryptjs = require('bcryptjs');

const signup=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"User already exsist"})
        }
        const hashpassword= await bcryptjs.hash(password,10)
        const newuser= await new User({username,email,password:hashpassword})
      await  newuser.save()
        return res.status(201).json({msg:"User created successfully"})
        
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user=await User.findOne({email});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!user||!isMatch){
            
            return res.status(400).json({msg:"Invalid User"})
        }
        else{
            
            return res.status(200).json({msg:"login successfully",user:{
                _id:user._id,
                username:user.username,
                email:user.email
            }})
        }
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({msg:error})
    }
}
module.exports={signup,login}
