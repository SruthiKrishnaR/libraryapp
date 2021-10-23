const express = require('express');
const admauthRouter = express.Router();
const Authordata = require('../model/Authordata');
const upload = require('../routes/multer');

function router(adm,opt){

    admauthRouter.get('/',(req,res)=>{
        res.render('addAuthor',{
            adm,
            opt,
            title:'Library'
        })
    });

    admauthRouter.post('/add', upload, (req,res)=>{
        var items = {
            name : req.body.name,
            country : req.body.country,
            works : req.body.works,
            dob : req.body.dob,
            image : req.file.filename
        }
        var author = Authordata(items);
        author.save(); 
        res.redirect('/authorsadmin');
        console.log(req.file , req.body);
    })

    return admauthRouter;
}

module.exports = router;