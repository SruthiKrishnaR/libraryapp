const express = require('express');
const logRouter = express.Router();

function routerLog(div){

    logRouter.get('/',(req,res)=>{
        res.render("signin",{
            div,
            title:'Library'
        });
    });

    return logRouter;
}

module.exports = routerLog;