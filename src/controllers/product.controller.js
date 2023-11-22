import { Product } from "../models/product.models";
import { Subsystem } from "../../utils/enumProduct";
export const getProducts=async(req,res)=>{
 try {
    const  products=await Product.findAll();
   await res.json(products);
 } catch (error) {
    res.json({message:error.message});
 }

};
export const getIdProduct=async(req,res)=>{
try {
    const id=req.params.id;
    const IdProduct= await Product.findByPk(id);
    await res.json(IdProduct);
} catch (error) {
    res.json({message:error.message});
}
};
export const createProduct=async(req,res)=>{
 try {
    const {name,description,maker,Subsystem,initialAmount}=req.body;
    const newProduct=await Product.create({
        name,
        description,
        maker,
        Subsystem,
        initialAmount
    });

    
    res.json(newProduct);

 } catch (error) {
    res.json({message:error.message});
 }
};
export const updateProduct=async(req,res)=>{
    const id=req.params.id;
    const {name,description,maker,Subsystem,initialAmount}=req.body;

    try {
       const updateProduct=await Product.findByPk(id);
        if(updateProduct){
            updateProduct.name=name;
            updateProduct.description=description;
            updateProduct.maker=maker;
            updateProduct.Subsystem=Subsystem;
            updateProduct.initialAmount=initialAmount;

        }
        await updateProduct.save();
        res.json(updateProduct);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        const {name}=req.body;
        const ProductId=Product.findByPk(id);
            if(ProductId){
            
                await Product.destroy({force:false})

            }
            res.json({message:`product:${name} successfully removed ID: ${id}`}).status(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//deleted logic
export const getDeletedProducts = async (req, res) => {
    try {
      const deletedProducts = await Product.findAll({
        where: { deletedAt: { [Op.ne]: null } }, // Productos con deletedAt no nulo
        paranoid: false, // Incluir registros eliminados lógicamente
      });
  
      res.json(deletedProducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //

  export const restoreProduct=async(req,res)=>{
    try {
        const id = req.params.id;
    
        // Buscar el producto por su ID (incluyendo eliminados lógicamente)
        const product = await Product.findOne({
          where: { id },
          paranoid: false,
        });
    
        if (!product) {
          return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
    
        // Restaurar el producto (eliminar la marca de eliminado lógico)
        await product.restore();
    
        res.json({ message: `Product ${product.name} successfully restored (ID: ${id})` });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};