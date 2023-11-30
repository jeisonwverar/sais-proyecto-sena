import z from 'zod';

export const registerSchema = z.object({
    name:z.string({
        required_error:'name is required'
    }).trim().min(2,{
        message:'The name must be at least 2 characters'
    }).max(120,{
        message:'The name must have a maximum of 120 characters'
    }),
    lastname:z.string({
        required_error:'lastname is required'
    }).trim().min(2,{
        message:'The lastname must be at least 2 characters'
    }).max(120,{
        message:'The lastname must have a maximum of 120 characters'
    }),
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    }),
    password:z.string({
        required_error:'Password is required'
    }).min(5,{
        message:'password must be at least 5 characters'
    })

});

export const loginSchema=z.object({
    email:z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    }),
    password:z.string({
        required_error:'password is required'
    }).min(5,{
        message:'password must be at least 5 characters'
    })
});
