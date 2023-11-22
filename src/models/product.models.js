import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";
import { Subsystem } from "../../utils/enumProduct";
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
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
       }

},
{
  paranoid:true  
}
);