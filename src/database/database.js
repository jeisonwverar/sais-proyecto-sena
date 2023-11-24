import  { Sequelize}  from "sequelize";

export  const sequelize=new Sequelize('sais_project','root','Jeis*n16',{
    host:'localhost',
    dialect:'mysql',
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
        timezone: 'local', // Utiliza la zona horaria local del sistema
      }
})