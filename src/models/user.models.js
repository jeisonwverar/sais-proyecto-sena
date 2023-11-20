import { DataTypes } from "sequelize";
import  sequelize  from "../database/database.js";

export const User=sequelize.define('user',{
 id:{
    type:DataTypes.INTEGER,
    

 }
});