import  jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "./config.js";

export const createAccessToken=(payload)=>{

    //return una promesa para manejarlo en el asincronismo
    return new Promise((resolve,reject)=>{

        jwt.sign(payload,TOKEN_SECRET,{
            expiresIn:'1h'
        },(err,token)=>{
            if(err)reject(err);
            resolve(token);
        })
    });
};