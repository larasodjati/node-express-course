const jwt = require('jsonwebtoken');

const {BadRequestError}  = require('../errors');

const login = async (req,res) =>{
    const {username, password} = req.body;

    //mongoose validation
    //Joi
    //check in the controller
    
    if(!username || !password){
        throw new BadRequestError('Please provide email and password', 400);
    }

    //just for demo, normally provided by DB!!!
    const id = new Date().getDate();

    //try to keep payload small, better experience for user
    //just for demo, in production use long, complex, and unguessable string value!
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn: '30d'});

    //console.log(username, password);
    //res.send('Fake Login/Register/Signup Route');
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req,res)=>{
    //console.log(req.user);

    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200)
    .json({msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    //console.log(req.headers);
    /*const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('No token provided', 401);
    }

    const token = authHeader.split(' ')[1];*/
   
    /*try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(decoded);

        const luckyNumber = Math.floor(Math.random()*100);
        res.status(200)
        .json({msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    }   catch (error){
        throw new CustomAPIError('Not authorized to access this route ', 401);
    }*/

    
}


module.exports = {
    login,dashboard
}