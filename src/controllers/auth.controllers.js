import bcrypt from 'bcrypt';
import  {User}  from '../models/user.models.js';
import  { createAccessToken } from '../utils/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const register=async(req,res)=>{
    const{name,lastname,email,password}=req.body;
    try {
        const userFound=await User.findOne({email});
        if(userFound)res.status(400).json(['the email already'])



        const passwordHash=await bcrypt.hash(password,10);
        const newUser=await User.create({
            name,
            lastname,
            email,
            password:passwordHash,
        });
        const userSaved= newUser.save();
        const token=await createAccessToken({id:userSaved.id,email:userSaved.email,role:userSaved.role});
        res.cookie('token',token);
        res.json({message:"User create successfully"});
    } catch (error) {
        res.json({message:error.message})
    }
};
export const login=async(req,res)=>{
    const {email,password}=req.body;
    console.log()
    try {
        const userFound=await User.findOne({where:{email}});
        
        if(!userFound) return res.status(400).json({message:'User not found'});
        
        const isMatch=await bcrypt.compare(password,userFound.password);
        
        if(!isMatch) return res.status(404).json({message:'Incorrect password'});

        const token= await createAccessToken({id:userFound.id,email:userFound.email,role:userFound.role});
        res.cookie('token',token);

        res.json({id:userFound.id,
            name:userFound.name,
            lastname:userFound.lastname,
            role:userFound.role,
            email:userFound.email,
            createAt:userFound.createdAt,
            updateAt:userFound.updatedAt
        })

        //console.log(req.cookies)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
export const logout=(req,res)=>{
    try {
    
        res.cookie('token','',{
            expires:new Date(0)
        })
        
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
export const verifyToken=async(req,res)=>{
    const {token}= req.cookies;
    if(!token) return res.status(401).json({message:"Unauthorized"})

    jwt.verify(token,TOKEN_SECRET,async(err,user)=>{
    if(err)return res.status(401).json('Unauthorized')

   const userFound= await User.findByPk(user.id);
   if(!userFound)return res.status(401).json('Unauthorized')

   return res.json({
    id:userFound.id,
    name:userFound.name,
    lastname:userFound.lastname,
    email:userFound.email,
    role:userFound.role
   })
   })
   
};