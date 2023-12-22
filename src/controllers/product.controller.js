import { Product } from "../models/product.models.js";
import { Op } from "sequelize";
export const getProducts=async(_,res)=>{
 try {
    const  products=await Product.findAll({
      attributes:[
        'id','name','description','maker','subsystem'
      ]
    });
    
   return res.json(products);
 } catch (error) {
  return  res.json({message:error.message}).status(404);
 }

};
export const getIdProduct=async(req,res)=>{
try {
    const id=req.params.id;
    const IdProduct= await Product.findByPk(id);
    return res.json(IdProduct);
} catch (error) {
   return res.json({message:error.message});
}
};
export const createProduct=async(req,res)=>{
 try {
    const {name,description,maker,subsystem,initialAmount,outputAmount,entryAmount}=req.body;
    const valueAmount=initialAmount;
    const newProduct=await Product.create({
        name,
        description,
        maker,
        subsystem,
        initialAmount,
        outputAmount,
        entryAmount,
        endAmount:valueAmount
    });

    
   return res.json(newProduct);

 } catch (error) {
    res.json({message:error.message});
 }
};
export const updateProduct=async(req,res)=>{
    const id=req.params.id;
    const {name,description,maker,subsystem,initialAmount}=req.body;

    try {
       const updateProduct=await Product.findByPk(id);
        if(updateProduct){
            updateProduct.name=name;
            updateProduct.description=description;
            updateProduct.maker=maker;
            updateProduct.subsystem=subsystem;
            updateProduct.initialAmount=initialAmount;

        }
        await updateProduct.save();
       return res.json(updateProduct);
    } catch (error) {
      return  res.json({message:error.message});
    }
};

export const deleteProduct=async(req,res)=>{
      const id=req.params.id;
    try {
        const productId= await Product.findByPk(id);
            if(!productId){
              return res.status(404).json({ message: 'User not found' });
              
            }
            await productId.destroy({force:false});

            res.json({message:`successfully removed ID: ${id}`}).status(204);
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }

};

//deleted logic
export const getDeletedProducts = async (_, res) => {
    try {
      const  products=await Product.findAll({
        where: { deletedAt: { [Op.ne]: null } }, 
        paranoid: false
      });
     return res.json(products);
    } catch (error) {
     return res.status(500).json({ message: error.message });
    }
  };



  export const restoreProduct=async(req,res)=>{
    try {
        const id = req.params.id;
    
        // Buscar el producto por su ID (incluyendo eliminados lógicamente)
        const product = await Product.findOne({
          where: { id },
          paranoid: false
        });
    
        if (!product) {
          return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
    
        // Restaurar el producto (eliminar la marca de eliminado lógico)
        await product.restore();
    
         return res.json({ message: `Product ${product.name} successfully restored (ID: ${id})` });
      } catch (error) {
         return res.status(500).json({ message: error.message });
      }
};