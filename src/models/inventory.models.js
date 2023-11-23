import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Product } from "./product.models.js";

export const Inventory=sequelize.define('inventory',{
    id:{
      type:DataTypes.BIGINT,
      autoIncrement:true, 
      primaryKey:true  
    },
    consecutive:{
        type:DataTypes.BIGINT,
        defaultValue:0,
        allowNull:false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      movementType: {
        type: DataTypes.ENUM('entrada','salida','reintegro'),
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.STRING,
        defaultValue: 'N/A',
      },
      observation:{
        type:DataTypes.TEXT,
        defaultValue: 'N/A',
      },
      date:{
        type:DataTypes.DATE,
        allowNull: false,
        defaultValue:new DataTypes.NOW
      }

});

Inventory.belongsTo(Product);
Product.hasMany(Inventory);