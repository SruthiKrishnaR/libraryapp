const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const upload = require('../routes/multer');

function router(adm,opt){

    adminRouter.get('/',(req,res)=>{
        res.render('addBook',{
            adm,
            opt,
            title:'Library'
        })
    });


    adminRouter.post("/add", upload, (req,res)=>{
        var item = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
        }
        var book = Bookdata(item);
        book.save(); 
        res.redirect('/booksadmin');
        console.log(req.file , req.body);
    });

    
    return adminRouter;
}

module.exports = router;