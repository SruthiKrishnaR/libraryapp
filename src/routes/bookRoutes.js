const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav,div){

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){

            res.render("books",{
                nav,
                div,
                title:'Library',
                books
            });
       });
    });
    
    //accessing value of i from url
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                nav,
                div,
                title:'Library',
                book
            });
        });
    });

    return booksRouter;
}


//exporting booksRouter
module.exports = router;