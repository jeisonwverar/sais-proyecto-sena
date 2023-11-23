import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Subsystem } from "../../utils/enum.js";
export const Product=sequelize.define('products',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true,
     },
       name:{
          type:DataTypes.STRING,
          allowNull: false,
       },
       description:{
        type:DataTypes.TEXT,
        allowNull: false,
        defaultValue:'N/A'
       },
       maker:{
        type:DataTypes.STRING,
          allowNull: false,
          defaultValue:'N/A'
       },
       subsystem:{
        type:DataTypes.ENUM(...Subsystem),
        defaultValue:Subsystem[Subsystem.length-1]
       },
       initialAmount:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
       },
       outputAmount:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
       },
       entryAmount:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
       }

},
{
  paranoid:true  
}
);