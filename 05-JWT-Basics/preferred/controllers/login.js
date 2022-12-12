const jwt=require('jsonwebtoken');

const login = (req,res) =>{
    if(!req.body.username || !req.body.password){
        throw new Error('unauthorized')
    }
    jwt.sign(
        {username: req.body.username}, 
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_LIFETIME},
        (err, result)=>{
            if(err){
                res.status(500).json({msg:'something went wrong'})
                console.log('jwt signing error', err)
                return
            }
            res.status(200).json({token: result})
        }
    )
}

module.exports = login;