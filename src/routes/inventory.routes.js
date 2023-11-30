import {Router} from 'express';
import {getInventory,getOutputInventory,getEntryInventory,getRefundInventory,createRecord,getInventoryId,updateInventory,deleteInventory} from '../controllers/inventory.controllers.js';
import {authRequired} from '../middlewares/validateToken.js';
import {checkRoleAuth} from '../middlewares/validateRoll.js';
const router=Router();
router.get('/inventory',authRequired,getInventory);
//output inventory
router.get('/inventory/output',authRequired,getOutputInventory);
//entry inventory
router.get('/inventory/entry',authRequired,getEntryInventory);
//inventory refund
router.get('/inventory/refund',authRequired,getRefundInventory);
//form register
router.post('/inventory',authRequired,createRecord);
export default router;
router.get('/inventory/:id',authRequired,checkRoleAuth(['admin','storer']),getInventoryId);
router.put('/inventory/:id',authRequired,checkRoleAuth(['admin','storer']),updateInventory);
//delete 

router.delete('/inventory/:id',authRequired,checkRoleAuth(['admin','storer']),deleteInventory);