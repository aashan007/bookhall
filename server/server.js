import express from "express";
import {readdirSync} from 'fs'
import cors from "cors"
import mongoose from "mongoose"
require('dotenv').config();
const morgan = require("morgan")


const app = express();

//db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=> console.log('DB Connected'))
.catch(()=> console.log('DB connection failed'))

//middleware
app.use(cors())
app.use(morgan('dev'))

// route middleware

readdirSync('./routes').map((r)=>
    app.use("/api",require(`./routes/${r}`))
    )


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Server is running on 8000`))