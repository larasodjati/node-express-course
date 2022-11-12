const authorize =(req, res, next) =>{
const {user} = req.query;
if(user === 'Lara'){
    req.user = {
        name: 'Lara', id:3
    }
    next();
}
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;