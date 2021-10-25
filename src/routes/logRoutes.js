const express = require('express');
const logRouter = express.Router();
const Signupdata = require('../model/signup');
const Admindata = require('../model/admin');
const bcrypt = require('bcrypt');
const alert = require('alert');

function routerLog(nav,div){

    logRouter.get('/',(req,res)=>{
        res.render("signin");
    });

    logRouter.post('/add',(req,res)=>{
       
        let username = req.body.username;
        let password = req.body.pass;
       
        console.log(username,password);
        Signupdata.findOne({'username':username},(err,user)=>{
            if(user){
                bcrypt.compare(password,user.pass)
                .then((status)=>{
                    if(status){
                        console.log('User Added');
                        div.user=username;
                        res.redirect('/');
                    }else{
                        console.log('Wrong Password');
                        res.render('signin');
                        alert('Wrong Password!!!');
                    }
                })
            }else if(!user){
                Admindata.find({'username':username},(err,admin)=>{
                    if(admin){
                        if(password === '12345'){
                            console.log('Admin Added');
                            div.user="Admin";
                            res.redirect('/indexadmin');
                        }else{
                            console.log('Wrong pwd');
                            res.redirect('/signin');
                        }
                    }else{
                            res.redirect('/');
                            alert('Not an Admin!!!');
                    }
                });
            }else{
                res.render('signup');
                alert('User not Found!!! Please Sign-In');
            }
        });
    });
    return logRouter;
}

module.exports = routerLog;