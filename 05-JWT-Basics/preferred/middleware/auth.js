const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Error ('unauthorized', 401);
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        
        const{id, username} = decoded;
        req.user = {id, username}

        next()
    }catch(error){
        throw new Error ({msg: error.message}, 401)
    }
}

module.exports = authMiddleware;