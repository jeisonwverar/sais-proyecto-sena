import {Router} from 'express';
import {getInventory,getOutputInventory,getEntryInventory,getRefundInventory,createRecord,getInventoryId,updateInventory,deleteInventory} from '../controllers/inventory.controllers.js';

const router=Router();
router.get('/inventory',getInventory);
//output inventory
router.get('/inventory/output',getOutputInventory);
//entry inventory
router.get('/inventory/entry',getEntryInventory);
//inventory refund
router.get('/inventory/refund',getRefundInventory);
//form para crear un nuevo registro
router.post('/inventory',createRecord);
export default router;
router.get('/inventory/:id',getInventoryId);
router.put('/inventory/:id',updateInventory);
//delete 

router.delete('/inventory/:id',deleteInventory);