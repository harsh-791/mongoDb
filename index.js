const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
require('dotenv').config()
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoute')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db Connected");
})
.catch((err)=>{
    console.log("Failed",err)
})

app.use('/api/products',productRoutes)
app.use('/api/user' , userRoutes)


app.listen(8086,()=>{
    console.log("Hello from 8086");
});