import z from 'zod';
import {MovementType } from '../utils/enum.js';
export const  inventorySchema=z.object({
    consecutive:z.string({
        required_error:'consecutive is required'
    }),
    amount:z.number({
        required_error:'amount is required'
    }),
    movementType:z.enum(MovementType,{
        required_error:'invalided name the movement'
    }),
    observation:z.string().optional(),
    productId:z.number({
        required_error:'product is required'
    }).nonnegative({
        required_error:'the number cannot be negative '
    })
})