const jwt = require('jsonwebtoken');
const User = require('../models/User');

const UserMiddelware = (roles) => {
    return async(req, res, next) => {
        try{
            const token = req.headers.authorization?.split(' ')[1];

            if(!token){
                return res.json({ Error: "No token Provided..."})
            }
    
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            req.user = decoded;
    
            const checkuser = await User.findById(req.user.id)
    
            if(!checkuser){
                return res.json({ Error: "No User Found"})
            }
    
            if (!roles.includes(checkuser.role)) {
                return res.json({ Error: "Access denied"})
            }

            next();
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = UserMiddelware;