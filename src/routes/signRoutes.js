const express = require('express');
const signRouter = express.Router();
const Signupdata = require('../model/signup');
const bcrypt = require('bcrypt');

function router(div){

    signRouter.get('/',(req,res)=>{
        res.render('signup');
    });

    signRouter.post('/create',async function(req,res){
        var details = {
            username : req.body.username,
            email : req.body.email,
            pass : req.body.pass,
            number : req.body.number
        }
        details.pass = await bcrypt.hash(details.pass,10);
        console.log(details.pass);

        var data = Signupdata(details);
        
        data.save();
        res.redirect('/signin');

    });

    return signRouter;
}

module.exports = router;



