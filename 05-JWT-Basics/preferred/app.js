require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express();

const mainRouter = require('./routes/main');

//middleware
app.use(express.json());

app.use('/api/v1', mainRouter);

const port = process.env.PORT || 6000;

const start = async()=>{
    try{
        app.listen(port, ()=>
            console.log(`Server is listening to the port ${port}...`)
        )
    }catch(error){
            console.log(error);
    }
        
}
start();