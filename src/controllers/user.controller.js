import {User} from '../models/user.models.js';

export const getUsers=async(req,res)=>{
 try {
    const users=await User.findAll({paranoid:false});
    await res.json(users);
 } catch (error) {
    return res.status(500).json({message:error.message})
 }
};
export const getIdUser=async(req,res)=>{
    const id=req.params.id;
try {
    const userId=await User.findByPk(id);
    await res.json(userId);
    
} catch (error) {
    return res.status(404).json({message:error.message})

}
};

export const createUsers=async(req,res)=>{
    const{name,lastname,email,password,roll}=req.body;
    try {
        const newUser=await User.create({
            name,
            lastname,
            email,
            password,
            roll
        })
        res.json(newUser);
    } catch (error) {
        res.json({message:error.message})
    }
};

export const updateUsers=async(req,res)=>{
    const userId=req.params.id;
    const{name,lastname,email,password,roll}=req.body;
    try {
        
       const updateUser=await User.findByPk(userId);

        
            updateUser.name=name;
            updateUser.lastname=lastname;
            updateUser.email=email;
            updateUser.password=password;
            updateUser.roll=roll;
        
     

       await updateUser.save();
       res.json(updateUser);
    

    } catch (error) {
        res.json({message:error.message})
    }

};
export const deleteUsers=async(req,res)=>{
    const id =req.params.id;
    const {defaultAt}=req.body;
    
    try {
    const user=await User.findByPk(id);
    if(user){
        await user.destroy({force:false})

    }
    res.json(defaultAt).status(204);
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};