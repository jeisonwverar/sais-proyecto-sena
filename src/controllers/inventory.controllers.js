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
            },
            include:[
                {
                    model:Product,
                    attributes: ['name','subsystem']
                }
            ]
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
            },
            include:[
                {
                    model:Product,
                    attributes: ['name','subsystem']
                }
            ]
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
                movementType:'reintegro',
            },
            include:[
                {
                    model:Product,
                    attributes: ['name','subsystem']
                }
            ]
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

//one route getId
export const  getInventoryId=async(req,res)=>{
 const {id}=req.params;
 try {
    const idInventory=await Inventory.findByPk(id);
    if(!idInventory){

       return res.status(404).json({message:`ID: ${id} Not Found`})
    }
    res.json(idInventory);



 } catch (error) {
     res.json({message:error.message});
 }

}
//update 

export const updateInventory=async(req,res)=>{
    const  {id}=req.params;
    const {consecutive,amount,movementType,observation,serialNumber,date}=req.body;
    try {
        const updateInventory= await Inventory.findByPk(id);
        if(updateInventory){
            updateInventory.consecutive=consecutive,
            updateInventory.amount=amount,
            updateInventory.movementType=movementType,
            updateInventory.observation=observation,
            updateInventory.serialNumber=serialNumber,
            updateInventory.date=date
        }

        await updateInventory.save();
        res.json(updateInventory)






    } catch (error) {
        res.json({message:error.message});
    }



};

export const deleteInventory=async(req,res)=>{
 const {id}=req.params;
    try {
        const deleteId= await Inventory.findByPk(id);
        if(!deleteId){
            return res.status(404).json({message:`ID: ${id} Not Found`})
        }
        deleteId.destroy();
        res.json(`deleted ID: ${id}`)
        
    } catch (error) {
        res.json({message:error.message});
    }
}