
import app from "./app.js";
import {sequelize}  from "./database/database.js";

const  port=process.env.PORT||3800;

const server=async()=>{
    try {

        //await sequelize.authenticate();
        //models syncronization
        await sequelize.sync({force:false});

    app.listen(3000);
    console.log("Server is listening on port  http://localhost:3000/api/v1/")
    } catch (error) {
        console.error("Unable to connect to the database:",error);

    }
    

};


server();