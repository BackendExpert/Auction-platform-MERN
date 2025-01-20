const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
                const hashpass = await bcrypt.hash(password, 10)

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
    },

    signin: async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if(checkuser){
                const checkpass = await bcrypt.compare(password, checkuser.password)

                if(checkpass){
                    const token = jwt.sign({ id: checkuser._id, role:checkuser.role }, process.env.JWT_SECRET);
                    return res.json({ Status: "Success", Result: checkuser, Token: token })
                }
                else{
                    return res.json({ Error: 'Password Not Match'})
                }
            }
            else{
                return res.json({ Error: "No user found..."})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;