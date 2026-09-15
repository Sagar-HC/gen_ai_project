const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

/**
 * @name registerUserController
 * @description Register a new user ,expects username , email ,password
 * @access public 
 */
async function registerUserController(req,res){

    const { name , email , password } = req.body;
    if(!email || !username || !password){
    return res.status(400).json({
        message:"please enter username , password and email"
    })
}

const isUserAlreadyExists = await userModel.findOne({
    $or:[{ username }, { password }]
});

if(isUserAlreadyExists){
    return res.status(400).json({
        message:"This user already exists with this email or username "
    });
}

const hash = await bcrypt.hash(password,10);

const user = await uesrModel.create({
    username,
    email,
    password:hash
})

const token = jwt.sign(
    { id:user._id,username:user.username }, 
    process.env.JWT_SECRET,
    { expiresIn:"1d"}
)

res.cookie("token",token)
//(name ,value)

res.status(201).json({
    message:"User registered successfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }
})

};

async function loginUserController(req,res){
    const {emai ,password } = req.body;

    const user = await userModel.findOne({ email });
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password",
        });
        
    }
}

module.exports ={registerUserController} ;