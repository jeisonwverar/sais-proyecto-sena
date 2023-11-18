import  Sequelize  from "sequelize";

export const sequelize=new Sequelize('sais_project','root','Jeis*n16',{
    host:'localhost',
    dialect:'mysql'
})