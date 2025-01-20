const User = require("../models/User");
const bcrypt = require('bcrypt')

const AuthController = {
    siginup: async(req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already exists in Given username or Email"})
            }
            else{
                const hashpass = bcrypt.hash(password, 10)

                const newUser = new User({
                    username: username,
                    email: email,
                    password: hashpass
                })

                const resultnewuser =  await newUser.save()

                if(resultnewuser){
                    return res.json({Status: "Success"})
                }
                else{
                    return res.json({Error: "Internal Server Error while Creating User"})
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;