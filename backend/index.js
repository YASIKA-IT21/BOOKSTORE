 import express from "express";
 import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookmodel.js';
import bookRoute from './routes/booksRoute.js';
import cors from'cors';

 const app = express();
 app.use(express.json());
 app.use(cors());
 
 app.get('/',(req,res)=>{
    console.log(request);
    return response.status(234).send("Welcome to MERN");

 });

 
app.use('/books',bookRoute);
 mongoose.connect(mongoDBURL)
 .then(()=>{
    console.log("Database connected");
    app.listen(PORT ,()=>{
        console.log('App is working');
     });
 })
 .catch((error)=>{
    console.log(error);

 }
 );