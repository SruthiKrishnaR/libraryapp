const express = require('express');
const adminRouter = express.Router();


function router(nav,div){

    adminRouter.get('/',(req,res)=>{
        res.render('addBook',{
            nav,
            div,
            title:'Library'
        })
    });

    adminRouter.get('/add',(req,res)=>{
        res.send("Hey...Added");
    })

    return adminRouter;
}

module.exports = router;