const express = require('express');
const admauthRouter = express.Router();


function router(nav,div){

    admauthRouter.get('/',(req,res)=>{
        res.render('addAuthor',{
            nav,
            div,
            title:'Library'
        })
    });

    admauthRouter.get('/add',(req,res)=>{
        res.send("Hey...Added Author");
    })

    return admauthRouter;
}

module.exports = router;