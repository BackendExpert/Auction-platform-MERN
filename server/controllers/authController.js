const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const PwdResetToken = require("../models/PwdResetToken");
const crypto = require('crypto')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

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
    },

    forgetpass: async(req, res) => {
        try{
            const { email } = req.body

            const checkemail = await User.findOne({ email: email })

            if(checkemail){
                const resetToken = crypto.randomBytes(32).toString('hex');
                const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
                const defultTime = new Date(); 
                const expireAt = new Date(defultTime.getTime() + 15 * 60000);

                const newpwtToken = new PwdResetToken({
                    email: email,
                    token: resetTokenHash,
                    expire_at: expireAt
                })

                const resultNewToken = await newpwtToken.save()

                const resetUrl = `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}/PasswordReset/${resetTokenHash}`;

                if(resultNewToken){
                    const mailOptions = {
                        from: process.env.EMAIL_USER,
                        to: email,
                        subject: "Password Reset",
                        html: `<h1>Password Reset Link</h1>
                                <p>Password Reset Token: ${resetUrl}</p>
                                <p>This token will be expired after 15min</p>
                                <p>Thank you</p>
                                <p>Admin</p>
                        `
                    };
                    await transporter.sendMail(mailOptions);
                    return res.json({ Status: "Success"})
                }
            }
            else{
                return res.json({ Error: "User not found by Givien Email Address"})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    passreset: async(req, res) => {
        try{
            const {
                newpass,
                confirmpass,
            } = req.body

            const token = req.params.token

            if(newpass === confirmpass){
                const checktoken = await PwdResetToken.findOne({ token: token })

                if(checktoken){
                    const hashnewpass = await bcrypt.hash(newpass, 10)

                    const updatepass = await User.findOneAndUpdate(
                        { email: checktoken.email },
                        {
                            $set: { password: hashnewpass }
                        },
                        { new: true }
                    )

                    if(updatepass){
                        const deletetoken = await PwdResetToken.findOneAndDelete({ token: token })

                        if(deletetoken){
                            return res.json({ Status: "Success"})
                        }
                        else{
                            return res.json({ Error: 'Interal Server Error'})
                        }
                    }
                    else{
                        return res.json({ Error: "Internal Server Error"})
                    }
                }   
                else{
                    return res.json({ Error: "Invalied Token or expired Token..."})
                }
            }
            else{
                return res.json({ Error: "Passwords not Match"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;