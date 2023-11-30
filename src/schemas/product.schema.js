import z from 'zod';
import { Subsystem}from '../utils/enum.js'
export const  productSchema=z.object({
    name:z.string({
        required_error:'name is required'
    }).trim(),
    description:z.string().trim().optional(),
    maker:z.string().trim().optional(),
    subsystem:z.enum(Subsystem),
    initialAmount:z.number({
        required_error:'initial mount is required'
    }).nonnegative({
        required_error:'the initial count can be greater than or equal to 0 '
    })
});