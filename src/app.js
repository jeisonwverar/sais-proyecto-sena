import  express  from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
//routes import
import userRoutes from  "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import inventoryRoutes from './routes/inventory.routes.js';
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(cookieParser());


//routes

app.use('/api/v1',userRoutes);
app.use('/api/v1',productRoutes);
app.use('/api/v1',inventoryRoutes);











export default app;