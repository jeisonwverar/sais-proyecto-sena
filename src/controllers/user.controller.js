import {User} from '../models/user.models.js';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
export const getUsers=async(req,res)=>{
 try {
    const users=await User.findAll({paranoid:true});
    await res.json(users);
 } catch (error) {
    return res.status(500).json({message:error.message})
 }
};
export const getIdUser=async(req,res)=>{
    const id=req.params.id;
try {
    const userId=await User.findByPk(id);

    if (!userId) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
    // Aquí desencriptamos temporalmente la contraseña antes de enviarla al frontend
     
   return res.json(userId);
    
} catch (error) {
    return res.status(404).json({message:error.message})

}
};
/*
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
*/
export const updateUsers=async(req,res)=>{
    const userId=req.params.id;
    const{name,lastname,email,password,role}=req.body;
    try {
        const passwordHash=await bcrypt.hash(password,10);
       const updateUser=await User.findByPk(userId);

       if(updateUser){
        updateUser.name=name;
        updateUser.lastname=lastname;
        updateUser.email=email;
        updateUser.password=passwordHash;
        updateUser.role=role;

       }
        
       await updateUser.save();
      return res.json(updateUser);
    

    } catch (error) {
      return  res.json({message:error.message})
    }

};
export const deleteUsers=async(req,res)=>{
    const id =req.params.id;
    
    
    try {
    const user=await User.findByPk(id);
    if(!user){
        
     return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy({force:false})
   return  res.json({message:`successfully removed ID: ${id}`}).status(204);
        

    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

//valor borrado logico poderlo traer y restaurar 

export const getUserDeleted=async(_,res)=>{
    console.log('Get User Deleted Route Hit');
    try {
        const deletedUsers = await User.findAll({
            where: { deletedAt: { [Op.ne]: null } }, // Usuarios con deletedAt no nulo
            paranoid: false, // Incluir registros eliminados lógicamente
          });
         //console.log(deletedUsers)
        return  res.json(deletedUsers);
      
         
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
};

//restore

export const restoreUser=async(req,res)=>{
    const id = req.params.id;
    try {
        //console.log('Restore User Route Hit');
       
        const user = await User.findOne(({
            where: { id },
            paranoid: false
          }));
    
        if (!user) {
          return res.status(404).json({ message: `User with ID ${id} not found` });
        }
    
   
        await user.restore();
    
         return res.json({ message: `User ${user.name} successfully restored (ID: ${id})` });
      } catch (error) {
       return res.status(500).json({ message: error.message });
      }
};