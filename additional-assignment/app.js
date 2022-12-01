require('./db/connect');
//1.create express app
const express = require('express');
const app = express();
//4.import routes
const tasks = require('./routes/tasks');
//7.connectDB
const connectDB = require('./db/connect');

//9.
require('dotenv').config()

//11.
const notFound = require('./middleware/not-found');

//12.
const errorHandlerMiddleware = require('./middleware/error-handler');

//14.
const ipMiddleware = require('./middleware/ip-add');


//6.middleware
app.use(express.static('./public'))
app.use(express.json());


/*3.routes 
app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})*/

//5.
app.use('/api/v1/tasks', tasks);

//Log the client's IP address with every request
//15.
app.use('/api/v1/tasks', ipMiddleware);

//10.
app.use(notFound);
//13.
app.use(errorHandlerMiddleware);




//2.set up the port //14.port var
//const port = 3000;
const port = process.env.PORT || 3000;

//8.start 
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`this server is listening on port ${port}... `));

    }catch(error){
        console.log(error)
    }
}

start();