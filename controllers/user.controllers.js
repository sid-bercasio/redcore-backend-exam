const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    signup: (req, res) => {
        const {name,lastname,email,password} = req.body
        
        models.Users.findOne({where:{email:email}}).then(result=>{
            if(result){
                res.status(409).json({
                    message: 'Email already exists!'
                })
            }else{
                bcryptjs.genSalt(10, (err,salt)=>{
                    bcryptjs.hash(password, salt, (err, hash)=>{
                        const user = {
                            firstName: name,
                            lastName: lastname,
                            email,
                            password:hash
                        }
                
                        models.Users.create(user).then(result => {
                            res.status(201).json({
                                message: 'User registered successfully',
                                data: result
                            })
                        }).catch(err => {
                            res.status(500).json({
                                message: 'Something went wrong on registration',
                                error: err
                            })
                        });
                    })
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong on registration',
                error: err
            })
        });
    },
    login: (req,res) => {
        
        const {email,password} = req.body
        
        models.Users.findOne({where:{email:email}}).then(user=>{
            if(user == null){
                res.status(401).json({
                    message: 'Invalid credentials'
                })
            }else{
                bcryptjs.compare(password,user.password, (err, result)=>{
                    if(result){
                        const token = jwt.sign({
                            email: user.email,
                            userId: user.id
                        }, "secret", (err, token) =>{
                            res.status(200).json({
                                message: 'Authentication successful',
                                data: token
                            })
                        })
                    }else{
                        res.status(401).json({
                            message: 'Incorrect password'
                        })
                    }
                });
            }
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Something went wrong on Login',
                error: err
            })
        })
    }
}