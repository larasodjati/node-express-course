
const ipMiddleware = function (req,res, next){
    console.log('your ip address is ' + req.ip)
    next()  
};

module.exports = ipMiddleware;