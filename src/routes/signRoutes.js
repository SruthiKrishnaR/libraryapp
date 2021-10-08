const express = require('express');
const signRouter = express.Router();

function routerSign(div){

    signRouter.get('/',(req,res)=>{
        res.render("signup",{
            div,
            title:'Library'
        });
    });

    return signRouter;
}

module.exports = routerSign;