import { Product } from "../models/product.models.js";
import { Inventory } from "../models/inventory.models.js";

export const  getInventory=async(_,res)=>{

    try {
        try {
            const  products=await Product.findAll();
           await res.json(products);
         } catch (error) {
            res.json({message:error.message});
         }
    } catch (error) {
        
    }

};

export const getOutputInventory=async(_,res)=>{
    try {
        const inventory=await Inventory.findAll({
            where:{
                movementType:'salida',
                include
            }
        });
        res.json(inventory);
    } catch (error) {
        res.json({message:error.message});
    }
};
export const getEntryInventory=async(_,res)=>{
    try {
        const inventory=await Inventory.findAll({
            where:{
                movementType:'entrada'
            }
        });
        res.json(inventory);
    } catch (error) {
        res.json({message:error.message});
    }
};
export const getRefundInventory=async(_,res)=>{
    try {
        const inventory=await Inventory.findAll({
            where:{
                movementType:'reintegro'
            }
        });
        res.json(inventory);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const createRecord=async(req,res)=>{
const{consecutive,amount,movementType,serialNumber,observation,date,productId}=req.body;
const getProductId= await Product.findByPk(productId);
try {
    if(!getProductId){

        res.status(404).json({message:`Product  with ID: ${productId} not found`})
        
    }

    const newRecord= await Inventory.create({
        consecutive,
        amount,
        movementType,
        serialNumber,
        observation,
        date,
        productId
    })
    

    if(movementType === 'entrada'){
        getProductId.entryAmount+=amount;
    }else if(movementType === 'salida'){
        getProductId.outputAmount+=amount;
    }else if(movementType === 'reintegro'){
        getProductId.outputAmount+=amount;
    }
    res.json(newRecord);
    await getProductId.save();

} catch (error) {
    res.json({message:error.message});
}


};