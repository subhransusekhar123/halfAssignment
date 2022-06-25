const express = require('express');
const app = express();
const {mongooseConnect} = require('./mongoConnect/mongoDB');
const {router} = require('./router/router');
const cors = require("cors");



app.use(express.json());
app.use(cors())

app.use('/api',router)

mongooseConnect() 

app.listen(5000,()=>{
    console.log("api is connected on 5000 port")
})


