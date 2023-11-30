import { DataTypes } from "sequelize";
import  {sequelize}  from "../database/database.js";

export const User=sequelize.define('user',{
   id:{
    type:DataTypes.BIGINT,
    primaryKey:true,
    autoIncrement:true,
 },
   name:{
      type:DataTypes.STRING(120),
      allowNull: false,
   },
   lastname:{
      type:DataTypes.STRING(120),
      allowNull: false,
   },
   email:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
   password:{
      type:DataTypes.STRING,
      allowNull: false,
   },
   role:{
      type:DataTypes.STRING,
      allowNull: false,
      defaultValue:'client'
   } 
},
{paranoid:true});