const RequestIp = require('request-ip');


const ipMiddleware = (req,res, next) => {
  req.ip = RequestIp.getClientIp(req);
  res.send('your IP:' + req.ip)
  next()
  console.log(req.ip)
  
};

module.exports = ipMiddleware;